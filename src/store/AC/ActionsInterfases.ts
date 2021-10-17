import { SET_GRAVATAR, SET_LOGIN } from "./actionTypes";

export interface Ilogin {
    sessionId: string,
    username: string
}

interface ISETLOGINAction {
    type: typeof SET_LOGIN
    payload: Ilogin
}

interface ISETGRAVATERINAction {
    type: typeof SET_GRAVATAR
    payload: string
}

export type IAuthAction = ISETLOGINAction | ISETGRAVATERINAction;

