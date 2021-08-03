import { StyleActions, styleActionsType } from 'src/app/reducers/element-styles/element-styles.actions';
import { CListStandartParams } from 'src/app/data/constantes';
import { IListElementStyleState } from 'src/app/data/interfaces';
import { CPxNamesStyles } from 'src/app/data/constantes';

export const stylesNodeElement = 'listParams';

const elementState: IListElementStyleState = {};

export const styleReducer = (state = elementState, action: StyleActions) => {
   switch (action.type) {
      case styleActionsType.setNewElement:
         return {
            ...state,
            [action.payload.id]: CListStandartParams[action.payload.type]
         };
      case styleActionsType.setStyleElement:
         return {
            ...state,
            [action.payload.id]: {
               ...state[action.payload.id],
               styles: {
                  ...state[action.payload.id].styles,
                  [action.payload.style]: CPxNamesStyles.includes(action.payload.style) ? action.payload.value + 'px' : action.payload.value
               }
            }
         }

      case styleActionsType.setParamElement:
         return {
            ...state,
            [action.payload.id]: {
               ...state[action.payload.id],
               [action.payload.param]: (action.payload.param !== 'options') ? action.payload.value : action.payload.value.split('-')
            }
         }
      case styleActionsType.deleteElement:
         let newState = { ...state };
         delete newState[action.payload.id];
         return newState;
      default:
         return state;
   }
}