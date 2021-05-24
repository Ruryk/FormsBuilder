import { StyleActions, styleActionsType } from 'src/app/reducers/element-styles/element-styles.actions';
import { CListStandartParams } from 'src/app/data/constantes';
import { IListElementStyleState } from 'src/app/data/interfaces';
import { CPxNamesStyles } from 'src/app/data/constantes';

export const stylesNodeElement = 'listParams';

const initialState: IListElementStyleState[] = [];

export const styleReducer = (state = initialState, action: StyleActions) => {
   switch (action.type) {
      case styleActionsType.setNewElement:
         return [
            ...state,
            {
               id: action.payload.id,
               params: CListStandartParams[action.payload.type]
            }
         ];
      case styleActionsType.setStyleElement:
         return state.map(el => {
            if (el.id === action.payload.id) {
               return {
                  id: action.payload.id,
                  params: {
                     ...el.params,
                     styles: {
                        ...el.params.styles,
                        [action.payload.style]: CPxNamesStyles.includes(action.payload.style) ? action.payload.value + 'px' : action.payload.value
                     }
                  }
               }
            }
            return el;
         });
      case styleActionsType.setParamElement:
         return state.map(el => {
            if (el.id === action.payload.id) {
               return {
                  id: action.payload.id,
                  params: {
                     ...el.params,
                     [action.payload.param]: (action.payload.param !== 'options') ? action.payload.value : action.payload.value.split('-')
                  }
               }
            }
            return el;
         });
      case styleActionsType.deleteElement:
         return state.filter(el => el.id !== action.payload.id);
      default:
         return state;
   }
}