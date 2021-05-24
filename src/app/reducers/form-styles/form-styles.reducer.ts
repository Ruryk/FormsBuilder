import { StyleActions, styleActionsType } from 'src/app/reducers/form-styles/form-styles.actions';
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

export const formStyleReducer = (state = initialState, { type, payload }: StyleActions) => {
   switch (type) {
      case styleActionsType.setParamForm:
         return {
            ...state,
            [payload.param]: CPxNamesStyles.includes(payload.param) ? payload.value + 'px' : payload.value
         }
      default:
         return state;
   }
}