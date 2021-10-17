import { IAuthAction } from "../AC/ActionsInterfases";
import { SET_LOGIN, SET_GRAVATAR } from "../AC/actionTypes";

const initState = {
    sessionId: '',
    username: '',
    gravatar: '',
    // email: '',
    // photo: ''
}

const auth = (state = initState, action: IAuthAction) => {
    switch (action.type) {
        case SET_LOGIN:
            return { ...state, ...action.payload }
        case SET_GRAVATAR:
            return { ...state, gravatar: action.payload }
        default:
            return state;
    }
}
export default auth;