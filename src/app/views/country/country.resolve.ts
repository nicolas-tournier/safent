import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { DataFacadeCountryService } from 'src/app/services/data-facade-country.service';
import { CountrySelect } from '../../model/CountrySelect';
import { DataFacadeCommonService } from '../../services/data-facade-common.service';

@Injectable()
export class CountryResolve implements Resolve<CountrySelect> {

  constructor(private facade: DataFacadeCountryService,private commonFacade: DataFacadeCommonService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<CountrySelect> {
    
    let cioc = route.params['cioc'];

    this.commonFacade.updateCurrentlySelectedCioc(cioc);

    return this.facade.selectedCountry$.pipe(
      take(1),
      map(countries => countries),
      tap((country: CountrySelect) => {
        if (!country) {
          throw new Error('No country data was found');
        }
      })
    )

  }
}
