import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { getStatusAuth, IStateReducers } from 'src/app/reducers';
import { LogInSuccessAction, LogInFailtureAction, LogOutAction } from 'src/app/reducers/auth/auth.actions';
import { IUser } from 'src/app/data/interfaces';
import { ChttpOptions } from 'src/app/data/constantes';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

   constructor(
      private http: HttpClient,
      private store: Store<IStateReducers>,
      private router: Router
   ) { }

   isLoggedIn(): boolean {
      let auth: boolean = false;
      this.store.pipe(select(getStatusAuth)).subscribe(sub => auth = sub);
      return auth;
   }

   logout(): void {
      this.store.dispatch(new LogOutAction());
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
   }

   responseHandlerSuccess(data: IUser, user: IUser): void {
      this.store.dispatch(new LogInSuccessAction({ email: user.email, token: data['access_token'] }));
      localStorage.setItem('token', data['access_token']);
      this.router.navigate(['/']);
   }

   responseHandlerError(error: any, user: IUser, message: BehaviorSubject<string>, item: SwalComponent): void {
      this.store.dispatch(new LogInFailtureAction({ email: user.email, error: error.error.message }));
      message.next(error.error.message);
      setTimeout(() => item.fire(), 0);
      this.router.navigate(['/login']);
   }

   login(user: IUser, message: BehaviorSubject<string>, item: SwalComponent): void {
      const response = this.http.post<IUser>(`http://localhost:3000/auth/login`, user, ChttpOptions);
      response.subscribe(
         (data) => this.responseHandlerSuccess(data, user),
         (error) => this.responseHandlerError(error, user, message, item)
      );
   }
}
