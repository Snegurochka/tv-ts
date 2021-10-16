import { SET_LOGIN } from "./actionTypes";

export interface Ilogin {
    sessionId: string,
    username: string
}

export interface IAuthAction {
    type: typeof SET_LOGIN
    payload: Ilogin
}