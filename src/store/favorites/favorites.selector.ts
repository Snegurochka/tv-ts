import { createSelector } from "reselect";
import { AppStateType } from "../root-reducer";

import { FavoritesInitStateType } from './favorites.reducer';

const selectFavoritesReducer = (state: AppStateType): FavoritesInitStateType => state.favorites;

export const selectFavoritesMovies = createSelector(
    [selectFavoritesReducer],
    (favorites) => favorites.movies
);
