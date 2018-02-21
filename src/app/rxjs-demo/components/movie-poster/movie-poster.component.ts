import { Component, OnInit, Input } from '@angular/core';
import { MovieInfo } from '../../../domain';

@Component({
    selector: 'app-movie-poster',
    templateUrl: './movie-poster.component.html',
    styleUrls: ['./movie-poster.component.less']
})
export class MoviePosterComponent implements OnInit {

    @Input() movie: MovieInfo;

    constructor() { }

    ngOnInit() {

    }

}
