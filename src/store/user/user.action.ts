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

export const SignOutStart = () => ({ type: USER_ACTION_TYPES.SIGN_OUT_START } as const);

export const signOutFailed = (error: string) => ({
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
    | ReturnType<typeof SignOutStart>
