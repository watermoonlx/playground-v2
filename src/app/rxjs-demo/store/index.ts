import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../reducer';
import * as fromMovie from './movie/reducer';

export interface RxJSDemoState {
    movies: fromMovie.State
}

export interface State extends fromRoot.State {
    rxJSDemo: RxJSDemoState;
}

export const reducers = {
    movies: fromMovie.reducer
};

export const getRxJSDemoState = createFeatureSelector<RxJSDemoState>("rxJSDemo");

export const getMovieState = createSelector(
    getRxJSDemoState,
    state => state.movies
);

export const getMovieList = createSelector(
    getMovieState,
    fromMovie.getMovieList
);

export const getMovieLoading = createSelector(
    getMovieState,
    fromMovie.getMovieList
);
