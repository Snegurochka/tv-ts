import { MovieType } from "../../interfaces/types";
import { IMoviesAction } from "./movies.action";
import { MOVIES_ACTION_TYPES } from "./movies.types";

const initState = {
    page: 0,
    results: [] as MovieType[],
    total_pages: 0,
    total_results: 0,
    isLoading: false,
    error: null
}

export type MoviesInitStateType = typeof initState;

const movies = (state = initState, action: IMoviesAction) => {
    switch (action.type) {
        case MOVIES_ACTION_TYPES.FETCH_MOVIES_START:
            return {
                ...state,
                isLoading: true,
            };
        case MOVIES_ACTION_TYPES.FETCH_RESULTS_SUCCESS:
            return {
                ...state, results: action.payload, isLoading: false
            }
        case MOVIES_ACTION_TYPES.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                ...action.payload,
                results:
                    action.payload.page > 1
                        ? [...state.results, ...action.payload.results]
                        : [...action.payload.results],
                isLoading: false
            }
        case MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
export default movies;