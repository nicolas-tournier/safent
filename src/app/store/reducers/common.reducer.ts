import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommonActions, CommonActionTypes } from "../actions";

export interface State {
  currentlySelectedCioc: string;
}
export const initialState: State = {
  currentlySelectedCioc: undefined
}
export function reducer(state: State = initialState, action: CommonActions): State {
  switch (action.type) {
    case CommonActionTypes.UpdateCurrentlySelectedCioc: {
      return {
        ...state,
        currentlySelectedCioc: action.payload.cioc
      }
    }
    default: {
      return state;
    }
  }
}
export const commonState = createFeatureSelector<State>('common');
export const getCurrentlySelectedCioc = createSelector(commonState, (state: State) => (state.currentlySelectedCioc));