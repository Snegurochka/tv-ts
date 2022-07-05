import { IMoviesAPI } from "../../interfaces/APIInterfases";
import { MovieType } from "../../interfaces/types";
import { MOVIES_ACTION_TYPES } from "./movies.types";

export const fetchMoviesStart = (page = 1, searchTerm = "") =>
({
    type: MOVIES_ACTION_TYPES.FETCH_MOVIES_START,
    payload: { page, searchTerm }
} as const);

export const fetchMoviesSuccess = (movies: IMoviesAPI) => ({
    type: MOVIES_ACTION_TYPES.FETCH_MOVIES_SUCCESS,
    payload: movies
} as const);

export const fetchResultsSuccess = (results: MovieType[]) => ({
    type: MOVIES_ACTION_TYPES.FETCH_RESULTS_SUCCESS,
    payload: results
} as const);

export const fetchMoviesFailed = (error: Error) => ({
    type: MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILED,
    payload: error
} as const);

export type fetchMoviesStartType = ReturnType<typeof fetchMoviesStart>;

export type IMoviesAction =
    | fetchMoviesStartType
    | ReturnType<typeof fetchMoviesSuccess>
    | ReturnType<typeof fetchResultsSuccess>
    | ReturnType<typeof fetchMoviesFailed>