import { UserType } from "../../types";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user: UserType) => ({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user
} as const);

export const checkUserSession = () => ({ type: USER_ACTION_TYPES.CHECK_USER_SESSION } as const);

export const googleSignInStart = () => ({ type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START } as const);

export const emailSignInStart = (email: string, password: string) => ({
    type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: { email, password }
} as const);

export const signInSuccess = (user: UserType) => ({
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: user
} as const);

export const signInFailed = (error: string) => ({
    type: USER_ACTION_TYPES.SIGN_IN_FAILED,
    payload: error
} as const);