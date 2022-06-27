import { all, call } from 'redux-saga/effects';

import { commentsSaga } from './comments/comments.saga';
import { userSaga } from './user/user.saga';

export function* rootSaga() {
    yield all([call(commentsSaga), call(userSaga)]);
}