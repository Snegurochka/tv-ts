import { User } from "firebase/auth";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AdditionalUserInformation } from "../../interfaces/APIInterfases";
import { UserType } from "../../types";
import { createUserDocumentFromAuth, getCurrentUser } from "../../utils/firebase.utils";
import { signInFailed, signInSuccess } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

export function* getSnapshotFromUserAuth(
    userAuth: User,
    additionalDetails?: AdditionalUserInformation) {
        try {
            const userSnapshot :QueryDocumentSnapshot<UserType> = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
            console.log(userSnapshot);
            
        } catch (error) {
            yield put(signInFailed('Error user saga'));
        }
}

export function* isUserAuthenticated() {
    try {
        const userAuth:User = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed('Error isAuth'));
    }

}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
    yield all([call(onCheckUserSession)]);
}