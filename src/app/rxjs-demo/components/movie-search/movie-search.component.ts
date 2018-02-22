import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
import { MovieService } from '../../services';
import { MovieApiResponse, MovieInfo } from '../../../domain';

@Component({
    selector: 'app-movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.less']
})
export class MovieSearchComponent implements OnInit {

    private inputText$ = new Rx.Subject<string>();

    private movieList$: Rx.Observable<MovieInfo[]>;

    private loading = false;

    constructor(
        private movieSvc: MovieService
    ) { }

    ngOnInit() {
        // this.inputText$.subscribe(console.log);

        this.movieList$ = this.inputText$
            .debounceTime(400)
            .distinctUntilChanged()
            .do(this.showLoading)
            .switchMap(keyword => this.movieSvc.search(keyword))
            .do(() => { debugger })
            .do(this.hideLoading)
            .map(i => i.subjects)
            .share();
    }

    private showLoading = () => {
        this.loading = true;
    }

    private hideLoading = () => {
        this.loading = false;
    }

}
