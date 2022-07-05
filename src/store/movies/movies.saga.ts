import { all, call, put, takeLatest } from "typed-redux-saga";
import API from "../../API";

import { fetchMoviesFailed, fetchMoviesStartType, fetchMoviesSuccess } from "./movies.action";
import { MOVIES_ACTION_TYPES } from "./movies.types";


export function* fetchMoviesAsync({
    payload: { type, searchTerm, page }
}: fetchMoviesStartType) {
    try {
        const movies = yield* call(API.fetchMovies, type, searchTerm, page);
        yield* put(fetchMoviesSuccess(movies));
    } catch (error) {
        yield* put(fetchMoviesFailed(error as Error));
    }
}

export function* onFetchMovies() {
    yield takeLatest(MOVIES_ACTION_TYPES.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* moviesSaga() {
    yield all([call(onFetchMovies)]);
}