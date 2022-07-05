import { spawn } from 'typed-redux-saga';

import { commentsSaga } from './comments/comments.saga';
import { movieSaga } from './movie/movie.saga';
import { moviesSaga } from './movies/movies.saga';
import { userSaga } from './user/user.saga';

// export function* rootSaga() {
//     yield all([
//         call(commentsSaga),
//         call(userSaga),
//         call(movieSaga)
//     ]);
// }

// Saga Pattern with a detached task.
export function* rootSaga() {
    yield spawn(userSaga);
    yield spawn(moviesSaga);
    yield spawn(commentsSaga);
    yield spawn(movieSaga);
}