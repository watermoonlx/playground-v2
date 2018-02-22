import { Action } from '@ngrx/store';
import { MovieInfo } from '../../../domain';

export const LOAD = '[Movie] Load';
export const LOAD_SUCCESS = '[Movie] Load Success';
export const LOAD_FAILED = '[Movie] Load Failed';


export class Load implements Action {
    readonly type = LOAD;

    constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: MovieInfo[]) { }
}

export class LoadFailed implements Action {
    readonly type = LOAD_FAILED;

    constructor(public payload: any) { }
}

export type Actions
    = Load
    | LoadSuccess
    | LoadFailed;
