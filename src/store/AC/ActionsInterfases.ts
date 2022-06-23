import { fetchCommentsFailed, fetchCommentsStart, fetchCommentsSuccess } from "../comments/comments.action";
import { SET_GRAVATAR, SET_LOGIN } from "./actionTypes";

export interface Ilogin {
    sessionId: string,
    email: string
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

export type ICommentsAction =
    | ReturnType<typeof fetchCommentsStart>
    | ReturnType<typeof fetchCommentsSuccess>
    | ReturnType<typeof fetchCommentsFailed>

