import { IAuthAction, Ilogin } from "./ActionsInterfases"
import { SET_GRAVATAR, SET_LOGIN } from "./actionTypes"

export const setLogin = (authData: Ilogin): IAuthAction => {
    return {
        type: SET_LOGIN,
        payload: authData
    }
}

export const setGravatar = (gravatar: string): IAuthAction => {
    return {
        type: SET_GRAVATAR,
        payload: gravatar
    }
}