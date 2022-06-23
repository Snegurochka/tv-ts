import { all, call } from 'redux-saga/effects';

import { commentsSaga } from './comments/comments.saga';

export function* rootSaga() {
    yield all([call(commentsSaga)])
}