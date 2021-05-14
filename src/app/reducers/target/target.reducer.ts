import { TargetActions, targetActionsType } from 'src/app/reducers/target/target.actions';
import { ITargetId } from 'src/app/data/interfaces';

export const targetNode = 'target';

const initialState: ITargetId = {
   targetRowId: null,
   targetElemId: null
};

export const targetReducer = (state = initialState, action: TargetActions) => {
   switch (action.type) {
      case targetActionsType.setTargetRow:
         return {
            ...state,
            targetRowId: action.payload.id
         };
      case targetActionsType.setTargetElem:
         return {
            ...state,
            targetElemId: action.payload.id
         };
      default:
         return state;
   }
}
