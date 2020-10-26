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

  currentSelectedCountryCioc$: Observable<string> = this.store
    .pipe(
      select(fromCommon.getCurrentlySelectedCioc),
      filter(cioc => !!cioc),
      map(cioc => cioc)
    )

  selectedCountry$: Observable<CountrySelect> = this.currentSelectedCountryCioc$
    .pipe(
      switchMap(cioc => this.store.pipe(
        select(fromCountry.getSelectedCountry(cioc)),
        map(country => country),
        tap(country => {
          if (!country) {
            this.store.dispatch(new LoadSelectedCountry({ cioc: cioc }))
          }
        })
      )),
      filter(country => !!country)
    )
}
