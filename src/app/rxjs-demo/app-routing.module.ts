import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MovieSearchComponent, CalculatorComponent, BasicConceptsComponent } from './components';

const routes: Routes = [
    { path: 'rxjs-demo/basic-concepts', component: BasicConceptsComponent },
    { path: 'rxjs-demo/calculator', component: CalculatorComponent },
    { path: 'rxjs-demo/movie-search', component: MovieSearchComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
