import { CommentType } from "../../interfaces/types";
import { COMMENTS_ACTION_TYPES } from "./comments.types";

export const fetchCommentsStart = () => ({type: COMMENTS_ACTION_TYPES.FETCH_COMMENTS_START, payload: true} as const);

export const fetchCommentsSuccess = (comments:CommentType[]) => ({
    type: COMMENTS_ACTION_TYPES.FETCH_COMMENTS_SUCCESS,
    payload: comments
 } as const);

export const fetchCommentsFailed = (error:Error) => ({type: COMMENTS_ACTION_TYPES.FETCH_COMMENTS_FAILED, payload: error} as const);

export type ICommentsAction =
    | ReturnType<typeof fetchCommentsStart>
    | ReturnType<typeof fetchCommentsSuccess>
    | ReturnType<typeof fetchCommentsFailed>