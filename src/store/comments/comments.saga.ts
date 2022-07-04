import { takeLatest, all, call, put } from 'typed-redux-saga';
import { getCommentsByMovieFromAPI } from '../../utils/firebase.utils';
import { fetchCommentsFailed, fetchCommentsSuccess } from './comments.action';
import { COMMENTS_ACTION_TYPES } from './comments.types';

export function* fetchCommentsAsync() {
  const movieId = '453395';
    try {
        const comments = yield* call(getCommentsByMovieFromAPI, movieId);
        
        yield* put(fetchCommentsSuccess(comments));
      } catch (error) {
        //const errorTxt = error.response.data.error;
      
        yield* put(fetchCommentsFailed(error as Error));
      }
}

export function* onFetchComments() {
  yield takeLatest(COMMENTS_ACTION_TYPES.FETCH_COMMENTS_START, fetchCommentsAsync);
}

export function* commentsSaga() {
    yield all([call(onFetchComments)]);
}