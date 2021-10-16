import { IAuthAction, Ilogin } from "./ActionsInterfases"
import { SET_LOGIN } from "./actionTypes"

export const setLogin = (authData: Ilogin): IAuthAction => {
    return {
        type: SET_LOGIN,
        payload: authData
    }
}