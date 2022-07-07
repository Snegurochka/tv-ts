import { FavoriteMovieType } from "../../interfaces/types";
import { FAVORITES_ACTION_TYPES } from "./favorites.types";

export const fetchFavoritesStart = (userId: string) => ({
    type: FAVORITES_ACTION_TYPES.FETCH_FAVORITES_START,
    payload: userId
} as const);

export const fetchFavoriteseSuccess = (favorites: FavoriteMovieType[]) => ({
    type: FAVORITES_ACTION_TYPES.FETCH_FAVORITES_SUCCESS,
    payload: favorites
} as const);

export const fetchFavoritesFailed = (error: Error) => ({
    type: FAVORITES_ACTION_TYPES.FETCH_FAVORITES_FAILED,
    payload: error
} as const);

export const addFavorite = (favorite: FavoriteMovieType) => ({
    type: FAVORITES_ACTION_TYPES.ADD_FAVORITE,
    payload: favorite
} as const);

export type fetchFavoritesStartType = ReturnType<typeof fetchFavoritesStart>;
export type addFavoriteType = ReturnType<typeof addFavorite>;

export type IFavoritesAction =
    | fetchFavoritesStartType
    | addFavoriteType
    | ReturnType<typeof fetchFavoriteseSuccess>
    | ReturnType<typeof fetchFavoritesFailed>
