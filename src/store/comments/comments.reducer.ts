import { CommentType } from "../../types";
import { ICommentsAction } from "../AC/ActionsInterfases";
import { COMMENTS_ACTION_TYPES } from "./comments.types";

const initState = {
    comments: [] as CommentType[],
    isLoading: false,
    error: null
}

export type CommentsInitStateType = typeof initState;

const comments = (state = initState, action: ICommentsAction) => {
    switch (action.type) {
        case COMMENTS_ACTION_TYPES.FETCH_COMMENTS_SUCCESS:
            return {
                ...state, comments: action.payload, isLoading: false
            }
        case COMMENTS_ACTION_TYPES.FETCH_COMMENTS_START:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
}
export default comments;