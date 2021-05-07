import {
   ActionReducerMap, MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { stylesNode, styleReducer } from './elemStyles/elemStyles.reduser';
import { stylesNodeForm, formStyleReducer } from './formStyles/formStyles.reduser';
import { IListFormStyleState, IListRowStyleState, IListElemStyleState, IUserAuth, ITargetId } from 'src/app/data/interfaces';
import { stylesNodeRow, rowStyleReducer } from './rowStyles/rowStyles.reduser';
import { authNode, authReducer } from './auth/auth.reduser';
import { targetNode, targetReducer } from './target/target.reduser';

export interface StateRedusers {
   [stylesNode]: IListElemStyleState[];
   [stylesNodeForm]: IListFormStyleState;
   [stylesNodeRow]: IListRowStyleState[];
   [authNode]: IUserAuth;
   [targetNode]: ITargetId;
}

export const reducers: ActionReducerMap<StateRedusers> = {
   [stylesNode]: styleReducer,
   [stylesNodeForm]: formStyleReducer,
   [stylesNodeRow]: rowStyleReducer,
   [authNode]: authReducer,
   [targetNode]: targetReducer
};

export const metaReducers: MetaReducer<StateRedusers>[] = !environment.production ? [] : [];