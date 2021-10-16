import { IAuthAction } from "./ActionsInterfases"
import { SET_LOGIN } from "./actionTypes"

export const setLogin = (name: string): IAuthAction => {
    return {
        type: SET_LOGIN,
        payload: name
    }
}