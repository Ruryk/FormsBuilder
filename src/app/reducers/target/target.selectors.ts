import { createFeatureSelector, createSelector } from '@ngrx/store';
import { targetNode } from './target.reduser';
import { ITargetId } from 'src/app/data/interfaces';

export const selectTargetFeature = createFeatureSelector<ITargetId>(targetNode);

export const selectRowId = createSelector(
   selectTargetFeature,
   (state: ITargetId): number => state.targetRowId
);

export const selectElemId = createSelector(
   selectTargetFeature,
   (state: ITargetId): number => state.targetElemId
);