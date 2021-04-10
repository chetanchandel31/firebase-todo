import firebase from "firebase/app";

//import firebase products
import "firebase/firestore";
import "firebase/auth";

//initialize app
firebase.initializeApp({
	apiKey: "AIzaSyAILEVp2tw_-81Fqc-bZspjuXlM2T5Rrfs",
	authDomain: "fir-todo-533bb.firebaseapp.com",
	projectId: "fir-todo-533bb",
	storageBucket: "fir-todo-533bb.appspot.com",
	messagingSenderId: "302050312346",
	appId: "1:302050312346:web:d45624413d19b5561ddf23",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
