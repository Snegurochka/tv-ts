import { all, call, put, takeLatest, fork } from "typed-redux-saga";
import API from "../../API";

import { fetchActorsSuccess, fetchDirectorsSuccess, fetchMovieFailed, fetchMovieStartType, fetchMovieSuccess, fetchPhotosSuccess } from "./movie.action";
import { MOVIE_ACTION_TYPES } from "./movie.types";

export function* fetchMovieInfo(id: string) {
    const movie = yield* call(API.fetchMovie, id);
    yield* put(fetchMovieSuccess(movie));
}

export function* fetchCrew(id: string) {
    const credits = yield* call(API.fetchCredits, id);
    //Get directors only
    const directors = credits.crew.filter(
        (member) => member.job === 'Director'
    );
    yield* put(fetchDirectorsSuccess(directors));
    yield* put(fetchActorsSuccess(credits.cast));
}

export function* fetchPhotos(id: string) {
    const photos = yield* call(API.fetchPhotos, id);
    yield* put(fetchPhotosSuccess(photos.backdrops));
}

export function* fetchMovieAsync({
    payload: id,
}: fetchMovieStartType) {
    try {
        yield* fork(fetchMovieInfo, id);
        yield* fork(fetchCrew, id);
        yield* fork(fetchPhotos, id);
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