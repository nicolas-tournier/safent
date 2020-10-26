import { Action } from '@ngrx/store';
import { CountryList } from '../../model/CountryList';

export enum CountriesActionTypes {

  LoadAllCountries = '[COUNTRIES] Load All Countries',
  LoadAllCountriesSuccess = '[COUNTRIES] Load All Countries Success',
  LoadAllCountriesFailure = '[COUNTRIES] Load All Countries Failure',
  
}

export class LoadAllCountries implements Action {
  readonly type = CountriesActionTypes.LoadAllCountries;
}
export class LoadAllCountriesSuccess implements Action {
  readonly type = CountriesActionTypes.LoadAllCountriesSuccess;
  constructor(public payload: { countriesList: CountryList[] }) { }
}
export class LoadAllCountriesFailure implements Action {
  readonly type = CountriesActionTypes.LoadAllCountriesFailure;
  constructor(public payload: { error: any }) { }
}

export type CountriesActions = LoadAllCountries | LoadAllCountriesSuccess | LoadAllCountriesFailure;

