import { StyleActions, styleActionsType } from 'src/app/reducers/row-styles/row-styles.actions';

import { IListRowStyleState } from 'src/app/data/interfaces';
import { CPxNamesStyles, CListRowStyles } from 'src/app/data/constantes';

export const stylesNodeRow = 'rowStyles';

const initialState: IListRowStyleState[] = [
   {
      id: 0,
      styles: CListRowStyles
   }
];

export const rowStyleReducer = (state = initialState, action: StyleActions) => {
   switch (action.type) {
      case styleActionsType.setNewRow:
         return [
            ...state,
            {
               id: action.payload.id,
               styles: CListRowStyles
            }
         ];
      case styleActionsType.setParamRow:
         return state.map(el => {
            if (el.id === action.payload.id) {
               return {
                  id: action.payload.id,
                  styles: {
                     ...el.styles,
                     [action.payload.param]: CPxNamesStyles.includes(action.payload.param) ? action.payload.value + 'px' : action.payload.value
                  }
               }
            }
            return el;
         });
      case styleActionsType.deleteRow:
         return state.filter(el => el.id !== action.payload.id);
      default:
         return state;
   }
}
