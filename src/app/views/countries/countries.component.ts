import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataFacadeCountriesService } from 'src/app/services/data-facade-countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.less']
})
export class CountriesComponent {

  constructor(public facade: DataFacadeCountriesService, private router: Router) {}

  onCountrySelected(alpha3Code: string): void {
    this.router.navigate(['/country', alpha3Code]);
  }
}
