import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CountriesResolve } from "./countries.resolve";
import { CountriesComponent } from './countries.component';

const routes: Routes = [
    {
        path: "",
        component: CountriesComponent,
        resolve: {
          countries: CountriesResolve
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountriesRoutingModule { }
