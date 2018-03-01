import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { MovieInfo } from '../../../domain';
import * as movieActions from './actions';

export interface State extends EntityState<MovieInfo> {
    loading:boolean
};

export const adapter: EntityAdapter<MovieInfo> = createEntityAdapter<MovieInfo>();

const initialState: State = adapter.getInitialState({ loading: false });

export function reducer(state = initialState, action: movieActions.Actions): State {
    switch (action.type) {
        case movieActions.LOAD: {
            return {
                ...state,
                loading: true
            };
        }
        case movieActions.LOAD_SUCCESS: {
            return {
                ...adapter.addMany(action.payload, state),
                loading:false
            }
        }
        case movieActions.LOAD_FAILED: {
            return state
        }
        default: {
            return state;
        }
    }
}

export const { selectAll: getMovieList } = adapter.getSelectors();
export const getLoading = (state: State) => state.loading;
