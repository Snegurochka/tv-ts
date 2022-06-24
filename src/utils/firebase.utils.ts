import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, QueryDocumentSnapshot, doc, getDoc, setDoc } from 'firebase/firestore';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User,
} from 'firebase/auth';
import { CommentType, UserType } from '../types';
import { AdditionalUserInformation } from '../interfaces/APIInterfases';

const firebaseConfig = {
    apiKey: "AIzaSyBOcX8hqzda1h_vzEfvElYNlQvLiBjCS20",
    authDomain: "kino-list.firebaseapp.com",
    projectId: "kino-list",
    storageBucket: "kino-list.appspot.com",
    messagingSenderId: "203862381317",
    appId: "1:203862381317:web:5c829e1a73785899c09d6c",
    measurementId: "G-6T5ZR2QSM5"
};


initializeApp(firebaseConfig);

export const db = getFirestore();

export const getCollectionAndDocuments = async (collectionName: string, params = '') => {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot;
};

// Comments
export const getCommentsByMovieFromAPI = async (id: string): Promise<CommentType[]> => {
    const querySnapshot = await getCollectionAndDocuments('comments');
    return querySnapshot.docs.map((doc) => doc.data() as CommentType);
};

// Auth
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});
export const auth = getAuth();

export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                console.log(unsubscribe);
                unsubscribe();
                resolve(userAuth);
            },
            reject
        );
    });
};

export const createUserDocumentFromAuth = async (
    userAuth: User,
    additionalInformation = {} as AdditionalUserInformation
): Promise<void | QueryDocumentSnapshot<UserType>> => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error);
        }
    }

    return userSnapshot as QueryDocumentSnapshot<UserType>;
};