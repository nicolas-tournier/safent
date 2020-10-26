import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryList } from "../../model/CountryList";
import { CountriesActions, CountriesActionTypes } from "../actions";

export interface State {
  countriesList: CountryList[];
}
export const initialState: State = {
  countriesList: undefined
}
export function reducer(state: State = initialState, action: CountriesActions): State {
  switch (action.type) {
    case CountriesActionTypes.LoadAllCountries: {
      return {
        ...state,
        countriesList: []
      }
    }
    case CountriesActionTypes.LoadAllCountriesSuccess: {
      return {
        ...state,
        countriesList: action.payload.countriesList
      }
    }
    case CountriesActionTypes.LoadAllCountriesFailure: {
      return {
        ...state,
        countriesList: []
      }
    }
    default: {
      return state;
    }
  }
}
export const countriesListState = createFeatureSelector<State>('countries');
export const getCountriesList = createSelector(countriesListState, (state: State) => (state.countriesList || undefined));