import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { CountryList } from '../model/CountryList';
import { LoadAllCountries, UpdateCurrentlySelectedAlpha3Code } from '../store/actions';
import { fromCountries } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class DataFacadeCountriesService {

  constructor(private store: Store<fromCountries.State>) { }

  countriesList$: Observable<CountryList[]> = this.store
    .pipe(
      select(fromCountries.getCountriesList),
      map(countries => countries),
      tap(countries => {
        if (!countries) {
          this.loadCountriesList();
        }
      })
    )
  loadCountriesList() {
    this.store.dispatch(new LoadAllCountries());
  }
  updateCurrentlySelectedCioc(alpha3Code: string) {
    this.store.dispatch(new UpdateCurrentlySelectedAlpha3Code({ alpha3Code: alpha3Code }))
  }
}
