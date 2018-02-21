import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
import { MovieService } from '../../services';
import { MovieApiResponse,MovieInfo } from '../../../domain';

@Component({
    selector: 'app-movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.less']
})
export class MovieSearchComponent implements OnInit {

    private inputText$ = new Rx.Subject<string>();

    private searchResult$: Rx.Observable<MovieApiResponse>;

    private movieList$: Rx.Observable<MovieInfo[]>;

    constructor(
        private movieSvc: MovieService
    ) { }

    ngOnInit() {
        // this.inputText$.subscribe(console.log);

        this.searchResult$ = this.inputText$
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(keyword => this.movieSvc.search(keyword))
            .share();

        this.movieList$ = this.searchResult$
            .map(i => i.subjects)
            .share();

        this.movieList$.subscribe(console.log);
    }

}
