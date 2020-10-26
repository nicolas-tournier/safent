import { Action } from '@ngrx/store';

export enum CommonActionTypes {
  UpdateCurrentlySelectedCioc = '[COMMON] Load All Countries',
}

export class UpdateCurrentlySelectedCioc implements Action {
  readonly type = CommonActionTypes.UpdateCurrentlySelectedCioc;
  constructor(public payload: { cioc: string }) { }
}

export type CommonActions = UpdateCurrentlySelectedCioc;

