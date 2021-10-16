import { SET_LOGIN } from "./actionTypes";

export interface IAuthAction {
    type: typeof SET_LOGIN
    payload: string
}