import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { CountrySelect } from '../model/CountrySelect';
import { LoadSelectedCountry } from '../store/actions';
import { fromCommon, fromCountry } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class DataFacadeCountryService {

  constructor(private store: Store<fromCountry.State>) { }

  currentSelectedCountryAlpha3Code$: Observable<string> = this.store
    .pipe(
      select(fromCommon.getCurrentlySelectedAlpha3Code),
      filter(alpha3Code => !!alpha3Code),
      map(alpha3Code => alpha3Code)
    )

  selectedCountry$: Observable<CountrySelect> = this.currentSelectedCountryAlpha3Code$
    .pipe(
      switchMap(alpha3Code => this.store.pipe(
        select(fromCountry.getSelectedCountry(alpha3Code)),
        map(country => country),
        tap(country => {
          if (!country) {
            this.store.dispatch(new LoadSelectedCountry({ alpha3Code: alpha3Code }))
          }
        })
      )),
      filter(country => !!country)
    )
}
