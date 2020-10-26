import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryList } from '../model/CountryList';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DataEndpointCountriesService {

  private endpoint = `${environment.apiBasePath}/rest/v2/all?fields=name;population;region;capital;flag;cioc`;

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<CountryList[]> {
    return this.http.get<CountryList[]>(this.endpoint);
  }
}
