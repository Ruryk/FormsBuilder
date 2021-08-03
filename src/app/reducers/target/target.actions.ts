import { Action } from '@ngrx/store';

export enum targetActionsType {
   setTargetElement = '[TARGET] setTargetElement',
   setTargetRow = '[TARGET] setTargetRow'
}

export class SetTargetElementAction implements Action {
   readonly type = targetActionsType.setTargetElement;
   constructor(public payload: { id: number }) { }
}

export class SetTargetRowAction implements Action {
   readonly type = targetActionsType.setTargetRow;
   constructor(public payload: { id: number }) { }
}

export type TargetActions = SetTargetElementAction | SetTargetRowAction;