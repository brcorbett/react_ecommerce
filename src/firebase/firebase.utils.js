import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCrnQ45XC0uPuVXNIP5ZA-AmP8BxehOgSI",
	authDomain: "react-ecommerce-db-e9944.firebaseapp.com",
	projectId: "react-ecommerce-db-e9944",
	storageBucket: "react-ecommerce-db-e9944.appspot.com",
	messagingSenderId: "414629839144",
	appId: "1:414629839144:web:b9e6a665dedc784b5a501d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
