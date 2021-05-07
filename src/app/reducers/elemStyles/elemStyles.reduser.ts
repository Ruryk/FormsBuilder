import { StyleActions, styleActionsType } from './elemStyles.actions';
import { CListStandartParams } from 'src/app/data/constantes';
import { IListElemStyleState } from 'src/app/data/interfaces';
import { СArrPxStyles } from 'src/app/data/constantes';

export const stylesNode = 'listParams';

const initialState: IListElemStyleState[] = [];

export const styleReducer = (state = initialState, action: StyleActions) => {
   switch (action.type) {
      case styleActionsType.setNewElem:
         return [
            ...state,
            {
               id: action.payload.id,
               params: CListStandartParams[action.payload.type]
            }
         ];
      case styleActionsType.setStyleElem:
         return state.map(el => {
            if (el.id === action.payload.id) {
               return {
                  id: action.payload.id,
                  params: {
                     ...el.params,
                     styles: {
                        ...el.params.styles,
                        [action.payload.style]: СArrPxStyles.includes(action.payload.style) ? action.payload.value + "px" : action.payload.value
                     }
                  }
               }
            }
            return el;
         });
      case styleActionsType.setParamElem:
         return state.map(el => {
            if (el.id === action.payload.id) {
               return {
                  id: action.payload.id,
                  params: {
                     ...el.params,
                     [action.payload.param]: (action.payload.param !== "options") ? action.payload.value : action.payload.value.split("-")
                  }
               }
            }
            return el;
         });
      case styleActionsType.deleteElem:
         return state.filter(el => el.id !== action.payload.id);
      default:
         return state;
   }
}