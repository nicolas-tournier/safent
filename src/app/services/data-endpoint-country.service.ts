import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountrySelect } from '../model/CountrySelect';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DataEndpointCountryService {

  constructor(private http: HttpClient) { }

  getSelectedCountry(alpha3Code: string): Observable<CountrySelect> {
    let endpoint = `${environment.apiBasePath}/rest/v2/alpha/${alpha3Code}?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;alpha3Code;flag`;
    return this.http.get<CountrySelect>(endpoint);
  }
}
