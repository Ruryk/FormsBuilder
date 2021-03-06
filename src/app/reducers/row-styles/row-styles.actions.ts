import { Action } from '@ngrx/store';

export enum styleActionsType {
   setNewRow = '[ROW-STYLE] setNewRow',
   setParamRow = '[ROW-STYLE] setParamRow',
   deleteRow = '[ROW-STYLE] deleteRow'
}

export class SetNewRowAction implements Action {
   readonly type = styleActionsType.setNewRow;
   constructor(public payload: { id: number }) { }
}

export class DeleteRowAction implements Action {
   readonly type = styleActionsType.deleteRow;
   constructor(public payload: { id: number }) { }
}

export class SetStyleRowAction implements Action {
   readonly type = styleActionsType.setParamRow;
   constructor(public payload: { id: number, param: string, value: string }) { }
}

export type StyleActions = SetStyleRowAction | SetNewRowAction | DeleteRowAction;