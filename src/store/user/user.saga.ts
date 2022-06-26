import { User } from "firebase/auth";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AdditionalUserInformation } from "../../interfaces/APIInterfases";
import { UserType } from "../../types";
import {
    createUserDocumentFromAuth,
    getCurrentUser,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    signOutUser
} from "../../utils/firebase.utils";
import { emailSignInStartType, signInFailed, signInSuccess, signOutFailed } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

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

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed('Error user saga'));
    }
}

export function* signInWithEmail({
    payload: { email, password },
}: emailSignInStartType,
) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed('Error user saga'));
    }
}

export function* SignOut() {
    try {
        signOutUser();
    } catch (error) {
        yield put(signOutFailed('Error user saga'));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, SignOut);
}

export function* userSaga() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOutStart)
    ]);
}