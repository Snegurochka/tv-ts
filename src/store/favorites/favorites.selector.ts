import { createSelector } from "reselect";
import { FavoriteMovieType } from "../../interfaces/types";
import { AppStateType } from "../root-reducer";

import { FavoritesInitStateType } from './favorites.reducer';

const selectFavoritesReducer = (state: AppStateType): FavoritesInitStateType => state.favorites;

export const selectFavoritesMovies = createSelector(
    [selectFavoritesReducer],
    (favorites) => favorites.movies
);

export const selectFavoritesMoviesIds = createSelector(
    [selectFavoritesReducer],
    (favorites) => favorites.movies?.reduce((acc, curr, index) => {
        acc[index] = curr.id;
        return acc
    }, [] as number[])
);
