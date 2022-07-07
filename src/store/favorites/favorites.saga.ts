import { all, call, put, takeLatest } from "typed-redux-saga";
import API from "../../API";
import { fetchFavoriteseSuccess, fetchFavoritesStartType } from "./favorites.action";
import { FAVORITES_ACTION_TYPES } from "./favorites.types";

export function* fetchFavoritesAsync({payload: userId}: fetchFavoritesStartType) {
    //const movies = yield* call(API.fetchFavorites, userId);
    yield* put(fetchFavoriteseSuccess([453395, 12]));

}

export function* onFetchFavorites() {
    yield takeLatest(FAVORITES_ACTION_TYPES.FETCH_FAVORITES_START, fetchFavoritesAsync);
}

export function* favoritesSaga() {
    yield all([call(onFetchFavorites)]);
}