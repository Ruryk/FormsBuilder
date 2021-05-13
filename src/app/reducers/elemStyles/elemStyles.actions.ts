import { Action } from '@ngrx/store';

export enum styleActionsType {
   setNewElem = '[ELEM-STYLE] setNewElem',
   setStyleElem = '[ELEM-STYLE] setStyleElem',
   setParamElem = '[ELEM-STYLE] setParamElem',
   deleteElem = '[ELEM-STYLE] deleteElem'
}
export class SetNewElemAction implements Action {
   readonly type = styleActionsType.setNewElem;
   constructor(public payload: { type: string, id: number }) { }
}

export class SetStyleElemAction implements Action {
   readonly type = styleActionsType.setStyleElem;
   constructor(public payload: { id: number, style: string, value: string }) { }
}

export class SetParamElemAction implements Action {
   readonly type = styleActionsType.setParamElem;
   constructor(public payload: { id: number, param: string, value: string }) { }
}

export class DeleteElemAction implements Action {
   readonly type = styleActionsType.deleteElem;
   constructor(public payload: { id: number }) { }
}

export type StyleActions = SetNewElemAction
   | SetStyleElemAction
   | SetParamElemAction
   | DeleteElemAction;