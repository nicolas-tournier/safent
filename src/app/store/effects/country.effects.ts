import { Injectable } from "@angular/core";
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CountryActions, CountryActionTypes, LoadSelectedCountryFailure, LoadSelectedCountrySuccess } from '../actions';
import { DataEndpointCountryService } from '../../services/data-endpoint-country.service';


@Injectable()
export class CountryEffects {

    constructor(
        private actions$: Actions<CountryActions>,
        private endpointService: DataEndpointCountryService
    ) { }

    @Effect()
    loadSelectedCountry$ = this.actions$.pipe(
        ofType(CountryActionTypes.LoadSelectedCountry),
        switchMap((action) => this.endpointService.getSelectedCountry(action.payload.cioc).pipe(
            map(country => new LoadSelectedCountrySuccess({ country: country })),
            catchError(error => of(new LoadSelectedCountryFailure({ error: error })))
        ))
    );
}