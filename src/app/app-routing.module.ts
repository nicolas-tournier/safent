import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./views/layout/layout.component";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                redirectTo: "countries",
                pathMatch: "full"
            },
            {
                path: "countries",
                loadChildren: () => import('./views/countries/countries.module').then(m => m.CountriesModule)
            },
            {
                path: "country",
                loadChildren: () => import('./views/country/country.module').then(m => m.CountryModule)
            },
            {
                path: '**',
                component: PageNotFoundComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
