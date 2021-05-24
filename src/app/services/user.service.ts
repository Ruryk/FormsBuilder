import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { IUser } from 'src/app/data/interfaces';
import { ChttpOptions } from 'src/app/data/constantes';
import { RegisterSuccessAction, RegisterFailtureAction } from 'src/app/reducers/auth/auth.actions';
import { IStateReducers } from 'src/app/reducers';

@Injectable({ providedIn: 'root' })
export class UserService {

   constructor(
      private http: HttpClient,
      private store: Store<IStateReducers>,
      private router: Router
   ) { }

   responseHandlerSuccess(data: IUser, user: IUser): void {
      this.store.dispatch(new RegisterSuccessAction({ email: user.email, token: data['access_token'] }));
      localStorage.setItem('token', data['access_token']);
      this.router.navigate(['/']);
   }

   responseHandlerError(error: any, user: IUser, message: BehaviorSubject<string>, item: SwalComponent): void {
      this.store.dispatch(new RegisterFailtureAction({ email: user.email, error: error.error.message }));
      message.next(error.error.message);
      setTimeout(() => item.fire(), 0);
      this.router.navigate(['/registration']);
   }

   registration(user: IUser, message: BehaviorSubject<string>, item: SwalComponent): any {
      const response = this.http.post<IUser>(`http://localhost:3000/auth/register`, user, ChttpOptions);
      response.subscribe(
         (data) => this.responseHandlerSuccess(data, user),
         (error) => this.responseHandlerError(error, user, message, item)
      );
   }

}
