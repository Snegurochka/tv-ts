import { all, call, put, takeLatest } from "typed-redux-saga";
import API from "../../API";
import { addFavoriteType, fetchFavoriteseSuccess, fetchFavoritesStartType } from "./favorites.action";
import { FAVORITES_ACTION_TYPES } from "./favorites.types";

export function* fetchFavoritesAsync({ payload: userId }: fetchFavoritesStartType) {
    //const movies = yield* call(API.fetchFavorites, userId);
    yield* put(fetchFavoriteseSuccess([453395, 12]));

}

export function* addFavoritesAsync({ payload: movieId }: addFavoriteType) {

}

export function* onFetchFavorites() {
    yield takeLatest(FAVORITES_ACTION_TYPES.FETCH_FAVORITES_START, fetchFavoritesAsync);
}

export function* onAddFavorite() {
    yield takeLatest(FAVORITES_ACTION_TYPES.ADD_FAVORITE, addFavoritesAsync);
}

export function* favoritesSaga() {
    yield all([
        call(onFetchFavorites),
        call(onAddFavorite),
    ]);
}