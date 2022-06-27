import { IUserAction } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

const initState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export type UserInitStateType = typeof initState;

const user = (state = initState, action: IUserAction) => {
    switch (action.type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state, currentUser: action.payload
            };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state, currentUser: null
            };
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
export default user;