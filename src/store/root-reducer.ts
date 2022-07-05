import { combineReducers } from "redux";
import user from './user/user.reducer';
import movie from './movie/movie.reducer';
import movies from './movies/movies.reducer';
import comments from './comments/comments.reducer';

const reducer = combineReducers({
    user,
    movie,
    movies,
    comments
});

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

export default reducer;