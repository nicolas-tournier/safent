import { Component, Input, OnInit } from '@angular/core';
import { CountryList } from 'src/app/model/CountryList';

@Component({
  selector: 'app-countries-list-card',
  templateUrl: './countries-list-card.component.html',
  styleUrls: ['./countries-list-card.component.less']
})
export class CountriesListCardComponent implements OnInit {

  @Input() countryData: CountryList;

  constructor() { }

  ngOnInit(): void {
  }
}
