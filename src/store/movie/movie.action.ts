import { MovieState } from "../../interfaces/types";
import { MOVIE_ACTION_TYPES } from "./movie.types";

export const fetchMovieStart = (id: string) => ({ type: MOVIE_ACTION_TYPES.FETCH_MOVIE_START, payload: id } as const);

export const fetchMovieSuccess = (movie: MovieState) => ({
    type: MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS,
    payload: movie
} as const);

export const fetchMovieFailed = (error: Error) => ({ type: MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED, payload: error } as const);

export type fetchMovieStartType = ReturnType<typeof fetchMovieStart>;

export type IMovieAction =
    | fetchMovieStartType
    | ReturnType<typeof fetchMovieSuccess>
    | ReturnType<typeof fetchMovieFailed>