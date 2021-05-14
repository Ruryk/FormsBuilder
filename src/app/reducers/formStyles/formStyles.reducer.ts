import { StyleActions, styleActionsType } from 'src/app/reducers/formStyles/formStyles.actions';
import { IListFormStyleState } from 'src/app/data/interfaces';
import { CPxNamesStyles } from 'src/app/data/constantes';

export const stylesNodeForm = 'formStyles';

const initialState: IListFormStyleState = {
   borderStyle: '',
   borderColor: '',
   fontSize: '14px',
   borderWidth: '1px',
   backgroundColor: '',
   color: 'black',
   width: '1000px'
};

export const formStyleReducer = (state = initialState, action: StyleActions) => {
   switch (action.type) {
      case styleActionsType.setParamForm:
         return {
            ...state,
            [action.payload.param]: CPxNamesStyles.includes(action.payload.param) ? action.payload.value + 'px' : action.payload.value
         }
      default:
         return state;
   }
}