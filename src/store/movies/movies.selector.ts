import { createSelector } from 'reselect';
import { AppStateType } from '../root-reducer';

import { MoviesInitStateType } from './movies.reducer';

const selectMovieReducer = (state: AppStateType): MoviesInitStateType => state.movies;

export const selectMovies = createSelector(
    [selectMovieReducer],
    (movies) => movies.results
);

export const selectMoviesPage = createSelector(
    [selectMovieReducer],
    (movies) => movies.page
);

export const selectMoviesTotalPages = createSelector(
    [selectMovieReducer],
    (movies) => movies.total_pages
);

export const selectMoviesIsLoading = createSelector(
    [selectMovieReducer],
    (movies) => movies.isLoading
);

export const selectMoviesError = createSelector(
    [selectMovieReducer],
    (movies) => movies.error
);