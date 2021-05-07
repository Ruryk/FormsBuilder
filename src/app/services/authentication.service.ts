import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser, IUserAuth } from '../data/interfaces';
import { ChttpOptions } from '../data/constantes';

import { select, Store } from '@ngrx/store';

import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { selectStatusAuth } from '../reducers/auth/auth.selectors';
import { LogInSuccessAction, LogInFailtureAction, LogOutAction } from '../reducers/auth/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

   constructor(
      private http: HttpClient,
      private authStore: Store<IUserAuth>,
      private router: Router
   ) { }

   isLoggedIn(): boolean {
      let auth: boolean = false;
      this.authStore.pipe(select(selectStatusAuth)).subscribe(sub => auth = sub);
      return auth;
   }

   logout(): void {
      this.authStore.dispatch(new LogOutAction());
      localStorage.removeItem("token");
      this.router.navigate(['/login']);
   }

   login(user: IUser, message: BehaviorSubject<string>, item: SwalComponent): void {
      const response = this.http.post<IUser>(`http://localhost:3000/auth/login`, user, ChttpOptions);
      response.subscribe(
         (data) => {
            this.authStore.dispatch(new LogInSuccessAction({ email: user.email, token: data['access_token'] }));
            localStorage.setItem("token", data['access_token']);
            this.router.navigate(['/']);
         },
         (error) => {
            this.authStore.dispatch(new LogInFailtureAction({ email: user.email, error: error.error.message }));
            message.next(error.error.message);
            setTimeout(() => item.fire(), 0);
            this.router.navigate(['/login']);
         }
      );
   }
}