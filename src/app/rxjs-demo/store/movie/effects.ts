import { Injectable } from '@angular/core';
import { MovieService } from '../../services';
import * as Rx from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as movieActions from './actions';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class MovieEffects {

    @Effect()
    load$: Rx.Observable<Action> =
        this.actions$.ofType(movieActions.LOAD)
            .switchMap((action: movieActions.Load) => {
                return this.movieSvc.search(action.payload)
                    .map(res => res.subjects)
                    .map(movies => new movieActions.LoadSuccess(movies))
                    .catch(err => Rx.Observable.of(new movieActions.LoadFailed(err)));
            });


    constructor(
        private actions$: Actions,
        private movieSvc: MovieService
    ) { }
}
