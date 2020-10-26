import { Injectable } from "@angular/core";
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CountriesActions, CountriesActionTypes, LoadAllCountriesFailure, LoadAllCountriesSuccess } from '../actions';
import { DataEndpointCountriesService } from '../../services/data-endpoint-countries.service';

@Injectable()
export class CountriesEffects {

  constructor(
    private actions$: Actions<CountriesActions>,
    private endpointService: DataEndpointCountriesService
  ) { }

  @Effect()
  loadAllCountries$ = this.actions$.pipe(
    ofType(CountriesActionTypes.LoadAllCountries),
    switchMap(() => this.endpointService.getAllCountries().pipe(
        map(countriesList => new LoadAllCountriesSuccess({countriesList: countriesList})),
        catchError(error => of(new LoadAllCountriesFailure({error: error})))
    ) )
  );
}