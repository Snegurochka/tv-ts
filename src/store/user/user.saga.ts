import { User } from "firebase/auth";
//import { push } from 'react-router-redux';
//import { push } from 'connected-react-router';
import { all, call, put, takeLatest } from "typed-redux-saga/macro";
import { AdditionalUserInformation } from "../../interfaces/APIInterfases";
import {
    createUserDocumentFromAuth,
    getCurrentUser,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    signOutUser
} from "../../utils/firebase.utils";
import { emailSignInStartType, signInFailed, signInSuccess, signOutFailed, SignOutSuccess } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

export function* getSnapshotFromUserAuth(
    userAuth: User,
    additionalDetails?: AdditionalUserInformation) {
    try {
        const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalDetails);
        if (!userSnapshot) return;
        yield* put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield* call(getCurrentUser);
        if (!userAuth) return;
        yield* call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield* call(signInWithGooglePopup);
        yield* call(getSnapshotFromUserAuth, user);
        //yield put(push('/'));
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signInWithEmail({
    payload: { email, password },
}: emailSignInStartType,
) {
    try {
        const userCredential = yield* call(signInAuthUserWithEmailAndPassword, email, password);
        if (!userCredential) return;
        const { user } = userCredential;
        yield* call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* SignOut() {
    try {
        yield* call(signOutUser);
        yield* put(SignOutSuccess());
    } catch (error) {
        yield* put(signOutFailed(error as Error));
    }
}

export function* onEmailSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignOutStart() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, SignOut);
}

export function* userSaga() {
    yield* all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOutStart)
    ]);
}