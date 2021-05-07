import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stylesNodeForm } from './formStyles.reduser';
import { IListFormStyleState } from 'src/app/data/interfaces';

export const selectParamsFeature = createFeatureSelector<IListFormStyleState>(stylesNodeForm);

export const selectParamsForm = createSelector(
   selectParamsFeature,
   (state: IListFormStyleState): any => state
);