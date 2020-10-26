import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CountryComponent } from './country.component';
import { CountryResolve } from './country.resolve';

const routes: Routes = [
    {
        path: ":cioc",
        component: CountryComponent,
        resolve: {
            country: CountryResolve
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountryRoutingModule { }
