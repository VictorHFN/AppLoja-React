//biblioteca do firebase
import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';

let firebaseConfig = {
    apiKey: "AIzaSyBZByYQUqjbIPCXYIJHk7TjICCM-h6ehYQ",
    authDomain: "applojavh.firebaseapp.com",
    projectId: "applojavh",
    storageBucket: "applojavh.appspot.com",
    messagingSenderId: "645254952444",
    appId: "1:645254952444:web:26c2cdf1ca945d8d9b6e79"
};

if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;