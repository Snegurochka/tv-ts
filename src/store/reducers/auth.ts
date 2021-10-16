import { IAuthAction } from "../AC/ActionsInterfases";
import { SET_LOGIN } from "../AC/actionTypes";

const initState = {
    name: '',
    email: '',
    photo: ''
}

const auth = (state=initState, action:IAuthAction) => {
    switch (action.type) {
        case SET_LOGIN:
            return { ...state}
        default:
            return state;
    }
}
export default auth;