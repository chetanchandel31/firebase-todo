import { auth } from "../../firebase";
import firebase from "../../firebase";

const SignIn = () => {
	const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

	return <button onClick={signInWithGoogle}>Sign in using google account</button>;
};

export default SignIn;
