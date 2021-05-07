import { Action } from '@ngrx/store';

export enum targetActionsType {
   setTargetElem = '[TARGET]  setTargetElem',
   setTargetRow = '[TARGET] setTargetRow'
}

export class SetTargetElemAction implements Action {
   readonly type = targetActionsType.setTargetElem;
   constructor(public payload: { id: number }) { }
}

export class SetTargetRowAction implements Action {
   readonly type = targetActionsType.setTargetRow;
   constructor(public payload: { id: number }) { }
}

export type TargetActions = SetTargetElemAction
   | SetTargetRowAction;