import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

let firebaseConfig = {
    apiKey: "AIzaSyDHdET0fiPhV8i4kAbgdRAcGykvUsuN1YM",
    authDomain: "dbcinelist.firebaseapp.com",
    projectId: "dbcinelist",
    storageBucket: "dbcinelist.appspot.com",
    messagingSenderId: "856508044075",
    appId: "1:856508044075:web:f96c9d822f3aeed8c0eb6e"

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}