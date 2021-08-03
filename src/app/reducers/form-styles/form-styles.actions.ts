import { Action } from '@ngrx/store';

export enum styleActionsType {
   setParamForm = '[FORM-STYLE] setParamForm'
}

export class SetStyleFormAction implements Action {
   readonly type = styleActionsType.setParamForm;
   constructor(public payload: { param: string, value: string }) { }
}

export type StyleActions = SetStyleFormAction;