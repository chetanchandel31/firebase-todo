import { auth } from "../../firebase";
import firebase from "../../firebase";

const SignIn = ({ setGuestUser }) => {
	const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

	return (
		<>
			<button onClick={signInWithGoogle}>Sign in using google account</button>
			<br /> <br />
			<button onClick={() => setGuestUser(true)}>continue as guest user</button>
		</>
	);
};

export default SignIn;
