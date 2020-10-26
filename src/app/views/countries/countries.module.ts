import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CountriesResolve } from 'src/app/views/countries/countries.resolve';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { fromCountries } from '../../store/reducers';
import { CountriesEffects } from '../../store/effects';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CountriesListCardComponent } from 'src/app/components/countries-list-card/countries-list-card.component';

@NgModule({
  declarations: [
    CountriesComponent,
    CountriesListCardComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    StoreModule.forFeature('countries', fromCountries.reducer),
    EffectsModule.forFeature([CountriesEffects]),
    MatCardModule
  ],
  providers: [CountriesResolve]
})
export class CountriesModule { }
