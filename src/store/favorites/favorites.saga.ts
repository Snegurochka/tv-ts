import { all, call, put, takeLatest } from "typed-redux-saga";

import { getFavoritesFromAPI } from "../../utils/firebase.utils";
import { addFavoriteType, fetchFavoriteseSuccess, fetchFavoritesStartType } from "./favorites.action";
import { FAVORITES_ACTION_TYPES } from "./favorites.types";

export function* fetchFavoritesAsync({ payload: userId }: fetchFavoritesStartType) {
    try {
        const movies = yield* call(getFavoritesFromAPI, userId);
        yield* put(fetchFavoriteseSuccess(movies));
    } catch (e) {

    }
}

export function* addFavoritesAsync({ payload: favorite }: addFavoriteType) {

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