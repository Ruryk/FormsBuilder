import { AuthActions, authActionsType } from './auth.actions';
import { IUserAuth } from 'src/app/data/interfaces';

export const authNode = 'auth';

const initialState: IUserAuth = {
   email: '',
   token: '',
   authentication: false,
   error: ''
};

export const authReducer = (state = initialState, action: AuthActions) => {
   switch (action.type) {
      case authActionsType.loginSuccess:
         return {
            email: action.payload.email,
            token: action.payload.token,
            authentication: true,
            error: ''
         };
      case authActionsType.loginFailure:
         return {
            ...state,
            email: action.payload.email,
            error: action.payload.error
         };
      case authActionsType.registerSuccess:
         return {
            email: action.payload.email,
            token: action.payload.token,
            authentication: true,
            error: ''
         };
      case authActionsType.registerFailure:
         return {
            ...state,
            email: action.payload.email,
            error: action.payload.error
         };
      case authActionsType.logout:
         return {
            email: '',
            token: '',
            authentication: false,
            error: ''
         };
      default:
         return state;
   }
}
