import { ActorType, Backdrops, DirectorType, MovieType } from "../../interfaces/types";
import { MOVIE_ACTION_TYPES } from "./movie.types";

export const fetchMovieStart = (id: string) => ({ type: MOVIE_ACTION_TYPES.FETCH_MOVIE_START, payload: id } as const);

export const fetchMovieSuccess = (movie: MovieType) => ({
    type: MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS,
    payload: movie
} as const);

export const fetchDirectorsSuccess = (directors: DirectorType[]) => ({
    type: MOVIE_ACTION_TYPES.FETCH_DIRECTORS_SUCCESS,
    payload: directors
} as const);

export const fetchActorsSuccess = (actors: ActorType[]) => ({
    type: MOVIE_ACTION_TYPES.FETCH_ACTORS_SUCCESS,
    payload: actors
} as const);

export const fetchPhotosSuccess = (photos: Backdrops[]) => ({
    type: MOVIE_ACTION_TYPES.FETCH_PHOTOS_SUCCESS,
    payload: photos
} as const);

export const fetchMovieFailed = (error: Error) => ({ type: MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED, payload: error } as const);

export type fetchMovieStartType = ReturnType<typeof fetchMovieStart>;

export type IMovieAction =
    | fetchMovieStartType
    | ReturnType<typeof fetchMovieSuccess>
    | ReturnType<typeof fetchDirectorsSuccess>
    | ReturnType<typeof fetchActorsSuccess>
    | ReturnType<typeof fetchPhotosSuccess>
    | ReturnType<typeof fetchMovieFailed>