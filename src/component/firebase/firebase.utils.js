import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyAhWx674-9H4hd24oAScgUG8FlysJOlL-k",
        authDomain: "crwn-db-cbe9a.firebaseapp.com",
        databaseURL: "https://crwn-db-cbe9a.firebaseio.com",
        projectId: "crwn-db-cbe9a",
        storageBucket: "",
        messagingSenderId: "158548298075",
        appId: "1:158548298075:web:98bf2aa6e26ca404"
      
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;