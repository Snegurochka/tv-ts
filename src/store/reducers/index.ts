import { combineReducers } from "redux";
import auth from './auth';
import user from '../user/user.reducer';
import comments from '../comments/comments.reducer';

const reducer = combineReducers({
    auth,
    user,
    comments
});

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

export default reducer;