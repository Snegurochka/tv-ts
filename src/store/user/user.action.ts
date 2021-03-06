import { UserType } from "../../interfaces/types";
import { USER_ACTION_TYPES } from "./user.types";
import { History } from 'history';

export const setCurrentUser = (user: UserType) => ({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user
} as const);

export const checkUserSession = () => ({ type: USER_ACTION_TYPES.CHECK_USER_SESSION } as const);

export const googleSignInStart = (history:History) => ({ type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, payload: history } as const);

export const emailSignInStart = (email: string, password: string, history:History) => ({
    type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: { email, password, history }
} as const);

export const signInSuccess = (user: UserType) => ({
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: user
} as const);

export const signInFailed = (error: Error) => ({
    type: USER_ACTION_TYPES.SIGN_IN_FAILED,
    payload: error
} as const);

export const SignOutStart = () => ({ type: USER_ACTION_TYPES.SIGN_OUT_START } as const);
export const SignOutSuccess = () => ({ type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS } as const);

export const signOutFailed = (error: Error) => ({
    type: USER_ACTION_TYPES.SIGN_OUT_FAILED,
    payload: error
} as const);

export type emailSignInStartType = ReturnType<typeof emailSignInStart>;

export type IUserAction =
    | ReturnType<typeof setCurrentUser>
    | ReturnType<typeof checkUserSession>
    | ReturnType<typeof googleSignInStart>
    | emailSignInStartType
    | ReturnType<typeof signInSuccess>
    | ReturnType<typeof signInFailed>
    | ReturnType<typeof SignOutSuccess>
    | ReturnType<typeof signOutFailed>
