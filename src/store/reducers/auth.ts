import { IAuthAction } from "../AC/ActionsInterfases";
import { SET_LOGIN } from "../AC/actionTypes";

const initState = {
    sessionId: '',
    username: '',
    // email: '',
    // photo: ''
}

const auth = (state = initState, action: IAuthAction) => {
    switch (action.type) {
        case SET_LOGIN:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
export default auth;