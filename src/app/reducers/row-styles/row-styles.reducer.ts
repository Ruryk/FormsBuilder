import { StyleActions, styleActionsType } from 'src/app/reducers/row-styles/row-styles.actions';

import { IListRowStyleState } from 'src/app/data/interfaces';
import { CPxNamesStyles, CListRowStyles } from 'src/app/data/constantes';

export const stylesNodeRow = 'rowStyles';
const defaultId: number = 0;

const rowState: IListRowStyleState = {
   [defaultId]: CListRowStyles
};

export const rowStyleReducer = (state = rowState, action: StyleActions) => {
   switch (action.type) {
      case styleActionsType.setNewRow:
         return {
            ...state,
            [action.payload.id]: {
               ...CListRowStyles,
               id: action.payload.id
            }
         };
      case styleActionsType.setParamRow:
         return {
            ...state,
            [action.payload.id]: {
               ...state[action.payload.id],
               [action.payload.param]: CPxNamesStyles.includes(action.payload.param) ? action.payload.value + 'px' : action.payload.value
            }
         };
      case styleActionsType.deleteRow:
         const newState = { ...state };
         delete newState[action.payload.id];
         return newState;
      default:
         return state;
   }
}
