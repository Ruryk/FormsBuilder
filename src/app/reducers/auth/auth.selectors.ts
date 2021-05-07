import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authNode } from './auth.reduser';
import { IUserAuth } from 'src/app/data/interfaces';

export const selectAuthFeature = createFeatureSelector<IUserAuth>(authNode);

export const selectStatusAuth = createSelector(
   selectAuthFeature,
   (state: IUserAuth): boolean => state.authentication
);