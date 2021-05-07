import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stylesNode } from './elemStyles.reduser';
import { IListElemStyleState } from 'src/app/data/interfaces';

export const selectParamsFeature = createFeatureSelector<IListElemStyleState[]>(stylesNode);

export const selectParamsElemForId = createSelector(
   selectParamsFeature,
   (state: IListElemStyleState[], props: any): any => {
      return state.filter(el => el.id === props.id)
   }
);

export const selectParamsElem = createSelector(
   selectParamsFeature,
   (state: IListElemStyleState[]): any => state
);
