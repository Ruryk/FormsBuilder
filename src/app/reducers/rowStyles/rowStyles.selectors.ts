import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stylesNodeRow } from './rowStyles.reduser';
import { IListRowStyleState } from 'src/app/data/interfaces';

export const selectParamsFeature = createFeatureSelector<IListRowStyleState[]>(stylesNodeRow);

export const selectParamsRowForId = createSelector(
   selectParamsFeature,
   (state: IListRowStyleState[], props: any): any => state.filter(el => el.id === props.id)
);


export const selectParamsRow = createSelector(
   selectParamsFeature,
   (state: IListRowStyleState[]): any => state
);