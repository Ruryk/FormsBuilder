import { StyleActions, styleActionsType } from './formStyles.actions';
import { IListFormStyleState } from 'src/app/data/interfaces';

export const stylesNodeForm = 'formStyles';

const initialState: IListFormStyleState = {
   borderStyle: "",
   borderColor: "",
   fontSize: "14px",
   borderWidth: "1px",
   backgroundColor: "",
   color: "black",
   width: "1000px"
};

export const formStyleReducer = (state = initialState, action: StyleActions) => {
   switch (action.type) {
      case styleActionsType.setParamForm:
         return {
            ...state,
            [action.payload.param]: (action.payload.param === "fontSize" || action.payload.param === "borderWidth" || action.payload.param === "width") ? action.payload.value + "px" : action.payload.value
         }
      default:
         return state;
   }
}