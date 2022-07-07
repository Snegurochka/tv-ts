import { IFavoritesAction } from "./favorites.action";
import { FAVORITES_ACTION_TYPES } from "./favorites.types";

const initState = {
    movies: [] as number[] | null,
    isLoading: false,
    error: null
}

export type FavoriteInitStateType = typeof initState;

const favorites = (state = initState, action: IFavoritesAction) => {
    switch (action.type) {
        case FAVORITES_ACTION_TYPES.FETCH_FAVORITES_START:
            return {
                ...state,
                isLoading: true,
            };
        case FAVORITES_ACTION_TYPES.FETCH_FAVORITES_SUCCESS:
            return {
                ...state, movies: action.payload, isLoading: false
            }
        case FAVORITES_ACTION_TYPES.FETCH_FAVORITES_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        case FAVORITES_ACTION_TYPES.ADD_FAVORITE:
            return {
                ...state, movies:
                    state.movies
                        ? [...state.movies, action.payload]
                        : action.payload
            }
        default:
            return state;
    }
}
export default favorites;