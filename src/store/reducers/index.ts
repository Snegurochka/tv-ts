import { combineReducers } from "redux";
import auth from './auth';

const reduser = combineReducers({
    auth
});

export default reduser;