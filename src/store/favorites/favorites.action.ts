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

export type fetchFavoritesStartType = ReturnType<typeof fetchFavoritesStart>;

export type IFavoritesAction =
    | fetchFavoritesStartType
    | ReturnType<typeof fetchFavoriteseSuccess>
    | ReturnType<typeof fetchFavoritesFailed>