import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CountryDetailComponent } from 'src/app/components/country-detail/country-detail.component';
import { CountryEffects } from 'src/app/store/effects';
import { fromCountry } from 'src/app/store/reducers';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryResolve } from './country.resolve';

@NgModule({
  declarations: [
    CountryComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    StoreModule.forFeature('country', fromCountry.reducer),
    EffectsModule.forFeature([CountryEffects]),
    MatCardModule
  ],
  providers: [CountryResolve]
})
export class CountryModule { }
