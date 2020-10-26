import { Component } from '@angular/core';
import { DataFacadeCountryService } from 'src/app/services/data-facade-country.service';

@Component({
  selector: 'app-country-root',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.less']
})
export class CountryComponent {
    constructor(public facade: DataFacadeCountryService){}
}
