import { Action } from '@ngrx/store';

export enum authActionsType {
   loginSuccess = '[AUTH] loginSuccess',
   loginFailure = '[AUTH] loginFailure',
   registerSuccess = '[AUTH] registerSuccess',
   registerFailure = '[AUTH] registerFailure',
   logout = '[AUTH] logout',
}

export class LogInSuccessAction implements Action {
   readonly type = authActionsType.loginSuccess;
   constructor(public payload: { email: string, token: string }) { }
}

export class LogInFailtureAction implements Action {
   readonly type = authActionsType.loginFailure;
   constructor(public payload: { email: string, error: string }) { }
}

export class RegisterSuccessAction implements Action {
   readonly type = authActionsType.registerSuccess;
   constructor(public payload: { email: string, token: string }) { }
}

export class RegisterFailtureAction implements Action {
   readonly type = authActionsType.registerFailure;
   constructor(public payload: { email: string, error: string }) { }
}

export class LogOutAction implements Action {
   readonly type = authActionsType.logout;
}

export type AuthActions = LogInSuccessAction
   | LogInFailtureAction
   | RegisterSuccessAction
   | RegisterFailtureAction
   | LogOutAction;