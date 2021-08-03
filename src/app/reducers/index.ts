import { ActionReducerMap, MetaReducer, createSelector } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { IListFormStyleState, IListRowStyleState, IListElementStyleState, IUserAuth, ITargetId } from 'src/app/data/interfaces';

import { stylesNodeRow, rowStyleReducer } from 'src/app/reducers/row-styles/row-styles.reducer';
import { authNode, authReducer } from 'src/app/reducers/auth/auth.reducer';
import { targetNode, targetReducer } from 'src/app/reducers/target/target.reducer';
import { stylesNodeElement, styleReducer } from 'src/app/reducers/element-styles/element-styles.reducer';
import { stylesNodeForm, formStyleReducer } from 'src/app/reducers/form-styles/form-styles.reducer';

import * as targetSelector from 'src/app/reducers/target/target.selectors';
import * as elementStylesSelector from 'src/app/reducers/element-styles/element-styles.selectors';
import * as formStylesSelector from 'src/app/reducers/form-styles/form-styles.selectors';
import * as rowStylesSelector from 'src/app/reducers/row-styles/row-styles.selectors';
import * as authSelector from 'src/app/reducers/auth/auth.selectors';

export interface IStateReducers {
   [stylesNodeElement]: IListElementStyleState;
   [stylesNodeForm]: IListFormStyleState;
   [stylesNodeRow]: IListRowStyleState;
   [authNode]: IUserAuth;
   [targetNode]: ITargetId;
}

export const reducers: ActionReducerMap<IStateReducers> = {
   [stylesNodeElement]: styleReducer,
   [stylesNodeForm]: formStyleReducer,
   [stylesNodeRow]: rowStyleReducer,
   [authNode]: authReducer,
   [targetNode]: targetReducer
};

export const getListStylesElementState = (state: IStateReducers) => state[stylesNodeElement];
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
export const getTargetElement = createSelector(
   getTargetState,
   targetSelector.selectElementId
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

// Elements Styles Selectors
export const getListParamsElementForId = createSelector(
   getListStylesElementState,
   elementStylesSelector.selectParamsElementForId
);
export const getListParamsElements = createSelector(
   getListStylesElementState,
   elementStylesSelector.selectParamsElement
);

export const metaReducers: MetaReducer<IStateReducers>[] = !environment.production ? [] : [];
