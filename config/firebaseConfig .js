import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC4VjxNnHn5q3l5BPZFmiH1if47579P1cM",
    authDomain: "intellitrain-528b5.firebaseapp.com",
    projectId: "intellitrain-528b5",
    storageBucket: "intellitrain-528b5.appspot.com",
    messagingSenderId: "569964145577",
    appId: "1:569964145577:web:7b41cc9dcaa6d15ea2b2b8",
    measurementId: "G-SKBM4G1CSS"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
