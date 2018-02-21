import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MovieApiResponse } from '../../domain';

@Injectable()
export class MovieService {

    private readonly domain = `/douban`;

    constructor(private http: Http) {
    }

    search(keyword: string) {
        return this.http.get(`${this.domain}/v2/movie/search?q=${keyword}`)
            .map(res => res.json() as MovieApiResponse);
    }

}
