import { ActorType, Backdrops, DirectorType, MovieType } from "../../interfaces/types";
import { IMovieAction } from "./movie.action";
import { MOVIE_ACTION_TYPES } from "./movie.types";

const initState = {
    movie: {} as MovieType,
    actors: [] as ActorType[],
    directors: [] as DirectorType[],
    photos: [] as Backdrops[],
    isLoading: false,
    error: null
}

export type MovieInitStateType = typeof initState;

const movie = (state = initState, action: IMovieAction) => {
    switch (action.type) {
        case MOVIE_ACTION_TYPES.FETCH_MOVIE_START:
            return {
                ...state,
                isLoading: true,
            };
        case MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS:
            return {
                ...state, movie: action.payload, isLoading: false
            }
        case MOVIE_ACTION_TYPES.FETCH_DIRECTORS_SUCCESS:
            return {
                ...state, directors: action.payload
            }
        case MOVIE_ACTION_TYPES.FETCH_ACTORS_SUCCESS:
            return {
                ...state, actors: action.payload
            }
        case MOVIE_ACTION_TYPES.FETCH_PHOTOS_SUCCESS:
            return {
                ...state, photos: action.payload
            }
        case MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
export default movie;