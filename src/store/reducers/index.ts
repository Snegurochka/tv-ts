import { combineReducers } from "redux";
import auth from './auth';

const reducer = combineReducers({
    auth
});

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

export default reducer;