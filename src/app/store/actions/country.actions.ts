import { Action } from '@ngrx/store';
import { CountrySelect } from '../../model/CountrySelect';

export enum CountryActionTypes {

  LoadSelectedCountry = '[COUNTRY] Load Selected Country',
  LoadSelectedCountrySuccess = '[COUNTRY] Load Selected Country Success',
  LoadSelectedCountryFailure = '[COUNTRY] Load Selected Country Failure',
  LoadSelectedCountryByAbbreviation = '[COUNTRY] Load Selected Country By Abbreviation',
}

export class LoadSelectedCountry implements Action {
  readonly type = CountryActionTypes.LoadSelectedCountry;
  constructor(public payload: { cioc: string }) { }
}
export class LoadSelectedCountrySuccess implements Action {
  readonly type = CountryActionTypes.LoadSelectedCountrySuccess;
  constructor(public payload: { country: CountrySelect }) { }
}
export class LoadSelectedCountryFailure implements Action {
  readonly type = CountryActionTypes.LoadSelectedCountryFailure;
  constructor(public payload: { error: any }) { }
}
export class LoadSelectedCountryByAbbreviation implements Action {
  readonly type = CountryActionTypes.LoadSelectedCountryByAbbreviation;
  constructor(public payload: { cioc: string }) { }
}

export type CountryActions = LoadSelectedCountry | LoadSelectedCountrySuccess | LoadSelectedCountryFailure |
  LoadSelectedCountryByAbbreviation;

