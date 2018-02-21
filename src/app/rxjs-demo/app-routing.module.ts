import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MovieSearchComponent } from './components';

const routes: Routes = [
    { path: 'rxjs-demo/movie-search', component: MovieSearchComponent },
    {
        path: '',
        redirectTo: 'rxjs-demo/movie-search',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
