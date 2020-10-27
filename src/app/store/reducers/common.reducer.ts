import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommonActions, CommonActionTypes } from "../actions";

export interface State {
  currentlySelectedAlpha3Code: string;
}
export const initialState: State = {
  currentlySelectedAlpha3Code: undefined
}
export function reducer(state: State = initialState, action: CommonActions): State {
  switch (action.type) {
    case CommonActionTypes.UpdateCurrentlySelectedAlpha3Code: {
      return {
        ...state,
        currentlySelectedAlpha3Code: action.payload.alpha3Code
      }
    }
    default: {
      return state;
    }
  }
}
export const commonState = createFeatureSelector<State>('common');
export const getCurrentlySelectedAlpha3Code = createSelector(commonState, (state: State) => (state.currentlySelectedAlpha3Code));