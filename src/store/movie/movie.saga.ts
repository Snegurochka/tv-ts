import { all, call, put, takeLatest } from "typed-redux-saga";
import API from "../../API";

import { fetchMovieFailed, fetchMovieStartType, fetchMovieSuccess } from "./movie.action";
import { MOVIE_ACTION_TYPES } from "./movie.types";

export function* fetchMovieAsync({
    payload: id,
}: fetchMovieStartType) {
    try {
        const movie = yield* call(API.fetchMovie, id);
        console.log(movie);


        //yield* put(fetchMovieSuccess(movie));
    } catch (error) {
        //const errorTxt = error.response.data.error;

        yield* put(fetchMovieFailed(error as Error));
    }

}


export function* onFetchMovie() {
    yield takeLatest(MOVIE_ACTION_TYPES.FETCH_MOVIE_START, fetchMovieAsync);
}

export function* movieSaga() {
    yield all([call(onFetchMovie)]);
}