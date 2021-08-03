import { Action } from '@ngrx/store';

export enum styleActionsType {
   setNewElement = '[ELEM-STYLE] setNewElem',
   setStyleElement = '[ELEM-STYLE] setStyleElem',
   setParamElement = '[ELEM-STYLE] setParamElem',
   deleteElement = '[ELEM-STYLE] deleteElem'
}

export class SetNewElementAction implements Action {
   readonly type = styleActionsType.setNewElement;
   constructor(public payload: { type: string, id: number }) { }
}

export class SetStyleElementAction implements Action {
   readonly type = styleActionsType.setStyleElement;
   constructor(public payload: { id: number, style: string, value: string }) { }
}

export class SetParamElementAction implements Action {
   readonly type = styleActionsType.setParamElement;
   constructor(public payload: { id: number, param: string, value: string }) { }
}

export class DeleteElementAction implements Action {
   readonly type = styleActionsType.deleteElement;
   constructor(public payload: { id: number }) { }
}

export type StyleActions = SetNewElementAction
   | SetStyleElementAction
   | SetParamElementAction
   | DeleteElementAction;