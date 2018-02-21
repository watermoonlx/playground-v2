import { MovieInfo } from './MovieInfo';

export interface MovieApiResponse {
    count: number,
    start: number,
    total: number,
    subjects: MovieInfo[],
    title: string
}
