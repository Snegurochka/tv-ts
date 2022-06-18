import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';

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
export const getCommentsByMovieFromAPI = async (id: string) => {
    const querySnapshot = await getCollectionAndDocuments('comments');
    return querySnapshot.docs.map((doc) => doc.data());
};