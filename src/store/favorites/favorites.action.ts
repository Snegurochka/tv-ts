import favorites from "./favorites.reducer";
import { FAVORITES_ACTION_TYPES } from "./favorites.types";

export const fetchFavoritesStart = (customerId: string) => ({
    type: FAVORITES_ACTION_TYPES.FETCH_FAVORITES_START,
    payload: customerId
} as const);

export const fetchFavoriteseSuccess = (favorites: number[]) => ({
    type: FAVORITES_ACTION_TYPES.FETCH_FAVORITES_SUCCESS,
    payload: favorites
} as const);

export const fetchFavoritesFailed = (error: Error) => ({
    type: FAVORITES_ACTION_TYPES.FETCH_FAVORITES_FAILED,
    payload: error
} as const);

export const addFavorite = (movieId: number, userId: string) => ({
    type: FAVORITES_ACTION_TYPES.ADD_FAVORITE,
    payload: { movieId, userId }
} as const);

export type fetchFavoritesStartType = ReturnType<typeof fetchFavoritesStart>;
export type addFavoriteType = ReturnType<typeof addFavorite>;

export type IFavoritesAction =
    | fetchFavoritesStartType
    | addFavoriteType
    | ReturnType<typeof fetchFavoriteseSuccess>
    | ReturnType<typeof fetchFavoritesFailed>
