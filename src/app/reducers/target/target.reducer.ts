import { TargetActions, targetActionsType } from 'src/app/reducers/target/target.actions';
import { ITargetId } from 'src/app/data/interfaces';

export const targetNode = 'target';

const targetState: ITargetId = {
   targetRowId: null,
   targetElementId: null
};

export const targetReducer = (state = targetState, { type, payload }: TargetActions) => {
   switch (type) {
      case targetActionsType.setTargetRow:
         return {
            ...state,
            targetRowId: payload.id
         };
      case targetActionsType.setTargetElement:
         return {
            ...state,
            targetElementId: payload.id
         };
      default:
         return state;
   }
}
