import { CommentType } from "../../types";
import { COMMENTS_ACTION_TYPES } from "./comments.types";

export const fetchCommentsStart = () => ({type: COMMENTS_ACTION_TYPES.FETCH_COMMENTS_START});

export const fetchCommentsSuccess = (comments:CommentType[]) => ({
    type: COMMENTS_ACTION_TYPES.FETCH_COMMENTS_SUCCESS,
    payload: comments
 });

export const fetchCommentsFailed = (error:string) => ({type: COMMENTS_ACTION_TYPES.FETCH_COMMENTS_FAILED, payload: error});