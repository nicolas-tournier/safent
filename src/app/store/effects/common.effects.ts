import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CommonActions, CommonActionTypes, UpdateCurrentlySelectedAlpha3Code } from '../actions';

@Injectable()
export class CommonEffects {

  constructor(
    private actions$: Actions<CommonActions>
  ) { }

  // @Effect()
  // currentlySelectedCioc$ = this.actions$.pipe(
  //   ofType(CommonActionTypes.UpdateCurrentlySelectedCioc),
  //   map(action => new UpdateCurrentlySelectedCioc({ cioc: action.payload.cioc })),
  // );
}