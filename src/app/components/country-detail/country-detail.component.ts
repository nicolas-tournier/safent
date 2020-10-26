import { Component, Input, OnInit } from '@angular/core';
import { CountrySelect } from 'src/app/model/CountrySelect';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.less']
})
export class CountryDetailComponent implements OnInit {

  @Input() country?: CountrySelect

  constructor() { }

  ngOnInit(): void {
  }

}
