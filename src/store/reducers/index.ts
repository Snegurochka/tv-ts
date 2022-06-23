import { combineReducers } from "redux";
import auth from './auth';
import comments from '../comments/comments.reducer';

const reducer = combineReducers({
    auth,
    comments
});

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

export default reducer;