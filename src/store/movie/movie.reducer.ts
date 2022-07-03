import { MoviType } from "../../interfaces/types";
import { IMovieAction } from "./movie.action";
import { MOVIE_ACTION_TYPES } from "./movie.types";

const initState = {
    movie: {} as MoviType,
    isLoading: false,
    error: null
}

export type MovieInitStateType = typeof initState;

const movie = (state = initState, action: IMovieAction) => {
    switch (action.type) {
        case MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS:
            return {
                ...state, movie: action.payload, isLoading: false
            }
        case MOVIE_ACTION_TYPES.FETCH_MOVIE_START:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
}
export default movie;