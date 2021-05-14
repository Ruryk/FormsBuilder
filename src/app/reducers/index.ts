import { ActionReducerMap, MetaReducer, createSelector } from '@ngrx/store';

import { environment } from '../../environments/environment';

import { IListFormStyleState, IListRowStyleState, IListElemStyleState, IUserAuth, ITargetId } from 'src/app/data/interfaces';

import { stylesNodeRow, rowStyleReducer } from './rowStyles/rowStyles.reducer';
import { authNode, authReducer } from './auth/auth.reducer';
import { targetNode, targetReducer } from './target/target.reducer';
import { stylesNodeElem, styleReducer } from './elemStyles/elemStyles.reducer';
import { stylesNodeForm, formStyleReducer } from './formStyles/formStyles.reducer';

import * as targetSelector from './target/target.selectors';
import * as elemStylesSelector from './elemStyles/elemStyles.selectors';
import * as formStylesSelector from './formStyles/formStyles.selectors';
import * as rowStylesSelector from './rowStyles/rowStyles.selectors';
import * as authSelector from './auth/auth.selectors';

export interface IStateReducers {
   [stylesNodeElem]: IListElemStyleState[];
   [stylesNodeForm]: IListFormStyleState;
   [stylesNodeRow]: IListRowStyleState[];
   [authNode]: IUserAuth;
   [targetNode]: ITargetId;
}

export const reducers: ActionReducerMap<IStateReducers> = {
   [stylesNodeElem]: styleReducer,
   [stylesNodeForm]: formStyleReducer,
   [stylesNodeRow]: rowStyleReducer,
   [authNode]: authReducer,
   [targetNode]: targetReducer
};

export const getListStylesElemState = (state: IStateReducers) => state[stylesNodeElem];
export const getListStylesFormState = (state: IStateReducers) => state[stylesNodeForm];
export const getListStylesRowState = (state: IStateReducers) => state[stylesNodeRow];
export const getAuthState = (state: IStateReducers) => state[authNode];
export const getTargetState = (state: IStateReducers) => state[targetNode];

// Auth Selectors
export const getStatusAuth = createSelector(
   getAuthState,
   authSelector.selectStatusAuth
);

// Target ID Selectors
export const getTargetRow = createSelector(
   getTargetState,
   targetSelector.selectRowId
);
export const getTargetElem = createSelector(
   getTargetState,
   targetSelector.selectElemId
);

// Form Styles Selectors
export const getListParamsForm = createSelector(
   getListStylesFormState,
   formStylesSelector.selectParamsForm
);

// Rows Styles Selectors
export const getListParamsRowForId = createSelector(
   getListStylesRowState,
   rowStylesSelector.selectParamsRowForId
);
export const getListParamsRows = createSelector(
   getListStylesRowState,
   rowStylesSelector.selectParamsRow
);

// Elems Styles Selectors
export const getListParamsElemForId = createSelector(
   getListStylesElemState,
   elemStylesSelector.selectParamsElemForId
);
export const getListParamsElems = createSelector(
   getListStylesElemState,
   elemStylesSelector.selectParamsElem
);

export const metaReducers: MetaReducer<IStateReducers>[] = !environment.production ? [] : [];
