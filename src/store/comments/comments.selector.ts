import { createSelector } from 'reselect';
import { CommentType } from '../../interfaces/types';
import { AppStateType } from '../reducers';
import { CommentsInitStateType } from './comments.reducer';

const selectCommentsReducer = (state: AppStateType): CommentsInitStateType => state.comments;

export const selectCommentsSlice = createSelector(
    [selectCommentsReducer],
    (commentsSlice) => commentsSlice.comments
);

export const selectComments = createSelector(
    [selectCommentsSlice],
    (comments) => comments.reduce((acc, { uid, title, text }, index) => {
        acc[index] = { uid, title, text };
        return acc;
    }, [] as CommentType[])
);

export const selectCommentsIsLoading = createSelector(
    [selectCommentsReducer],
    (commentsSlice) => commentsSlice.isLoading
);