import { createSelector } from 'reselect';
import { AppStateType } from '../root-reducer';

import { MovieInitStateType } from './movie.reducer';

const selectMovieReducer = (state: AppStateType): MovieInitStateType => state.movie;

export const selectMovie = createSelector(
    [selectMovieReducer],
    (movie) => ({ ...movie.movie, actors: movie.actors, directors: movie.directors })
);

export const selectMovieIsLoading = createSelector(
    [selectMovieReducer],
    (movie) => movie.isLoading
);

export const selectMovieError = createSelector(
    [selectMovieReducer],
    (movie) => movie.error
);