import { User } from "firebase/auth";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AdditionalUserInformation } from "../../interfaces/APIInterfases";
import { UserType } from "../../types";
import {
    createUserDocumentFromAuth,
    getCurrentUser,
    signInWithGooglePopup
} from "../../utils/firebase.utils";
import { signInFailed, signInSuccess } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

export function* signInWithGoogle() {
    try {
        const user: User = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed('Error user saga'));
    }
}

export function* getSnapshotFromUserAuth(
    userAuth: User,
    additionalDetails?: AdditionalUserInformation) {
    try {
        const userSnapshot: QueryDocumentSnapshot<UserType> = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        console.log(userSnapshot);
        if (userSnapshot) {
            yield put(
                signInSuccess({ ...userSnapshot.data() })
            );
        }
    } catch (error) {
        yield put(signInFailed('Error user saga'));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth: User = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed('Error isAuth'));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSaga() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart)
    ]);
}