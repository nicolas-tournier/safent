import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { CountryList } from 'src/app/model/CountryList';
import { DataFacadeCountriesService } from '../../services/data-facade-countries.service';

@Injectable()
export class CountriesResolve implements Resolve<CountryList[]> {

  constructor(private facade: DataFacadeCountriesService) { }

  resolve(): Observable<CountryList[]> {

    return this.facade.countriesList$.pipe(
      take(1),
      map(countries => countries),
      tap((countries: CountryList[]) => {
        if (countries === []) {
          throw new Error('No countries data was found');
        }
      })
    )
  }
}
