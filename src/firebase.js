import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD5MNo_Q-kCrFrRuffF7hkMafFViYNBTsI",
    authDomain: "laaps-468f0.firebaseapp.com",
    databaseURL: "https://laaps-468f0.firebaseio.com",
    projectId: "laaps-468f0",
    storageBucket: "laaps-468f0.appspot.com",
    messagingSenderId: "949807130875",
    appId: "1:949807130875:web:220c45d7eca77a2552e85e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
