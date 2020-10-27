import { Action } from '@ngrx/store';

export enum CommonActionTypes {
  UpdateCurrentlySelectedAlpha3Code = '[COMMON] Update alpha3Code Code',
}

export class UpdateCurrentlySelectedAlpha3Code implements Action {
  readonly type = CommonActionTypes.UpdateCurrentlySelectedAlpha3Code;
  constructor(public payload: { alpha3Code: string }) { }
}

export type CommonActions = UpdateCurrentlySelectedAlpha3Code;

