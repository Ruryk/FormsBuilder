import { TargetActions, targetActionsType } from 'src/app/reducers/target/target.actions';
import { ITargetId } from 'src/app/data/interfaces';

export const targetNode = 'target';

const initialState: ITargetId = {
   targetRowId: null,
   targetElemId: null
};

export const targetReducer = (state = initialState, { type, payload }: TargetActions) => {
   switch (type) {
      case targetActionsType.setTargetRow:
         return {
            ...state,
            targetRowId: payload.id
         };
      case targetActionsType.setTargetElement:
         return {
            ...state,
            targetElemId: payload.id
         };
      default:
         return state;
   }
}
