import { StyleActions, styleActionsType } from 'src/app/reducers/rowStyles/rowStyles.actions';

export const stylesNodeRow = 'rowStyles';
import { IListRowStyleState } from 'src/app/data/interfaces';
import { CPxNamesStyles } from 'src/app/data/constantes';

const initialState: IListRowStyleState[] = [
   {
      id: 0,
      styles: {
         minHeight: '50px',
         flexDirection: 'row',
         justifyContent: 'space-around',
         alignItems: 'center'
      }
   }
];

export const rowStyleReducer = (state = initialState, action: StyleActions) => {
   switch (action.type) {
      case styleActionsType.setNewRow:
         return [
            ...state,
            {
               id: action.payload.id,
               styles: {
                  minHeight: '50px',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center'
               }
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
