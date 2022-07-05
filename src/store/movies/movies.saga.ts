import { all, call, put, takeLatest, fork } from "typed-redux-saga";
import API from "../../API";

import { fetchMoviesFailed, fetchMoviesStartType, fetchMoviesSuccess } from "./movies.action";
import { MOVIES_ACTION_TYPES } from "./movies.types";

// export function* fetchMoviesList(id: string) {
//     const movie = yield* call(API.fetchMovie, id);
//     yield* put(fetchMoviesSuccess(movie));
// }

export function* fetchMoviesAsync({
    payload: { searchTerm, page }
}: fetchMoviesStartType) {
    try {
        const type = 'movie';
        const movies = yield* call(API.fetchMovies, type, searchTerm, page);
        //const movies = results.results;
        yield* put(fetchMoviesSuccess(movies));
    } catch (error) {
        //const errorTxt = error.response.data.error;

        yield* put(fetchMoviesFailed(error as Error));
    }
}

export function* onFetchMovies() {
    yield takeLatest(MOVIES_ACTION_TYPES.FETCH_MOVIES_START, fetchMoviesAsync);
}

export function* moviesSaga() {
    yield all([call(onFetchMovies)]);
}