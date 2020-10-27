import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountrySelect } from "../../model/CountrySelect";
import { CountryActions, CountryActionTypes } from "../actions";


export interface State {
  countriesSelected: any;
}
export const initialState: State = {
  countriesSelected: {},
}
export function reducer(state: State = initialState, action: CountryActions): State {
  switch (action.type) {
    case CountryActionTypes.LoadSelectedCountrySuccess: {
      let toAdd = { [action.payload.country.alpha3Code]: action.payload.country };
      return {
        ...state,
        countriesSelected: { ...state.countriesSelected, ...toAdd }
      }
    }
    default: {
      return state;
    }
  }
}

export const countrySelectState = createFeatureSelector<State>('country');

export function getSelectedCountry(alpha3Code: string) {
  return createSelector(countrySelectState, (state: State) => {
    if (!state.countriesSelected || !state.countriesSelected[alpha3Code]) { return undefined }
    return state.countriesSelected[alpha3Code] as CountrySelect;
  });
}