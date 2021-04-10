import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Todos from "./components/Todos/Todos";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
	const [user] = useAuthState(auth);
	console.log(user);

	return (
		<div className="App">
			<h1>Parcha</h1>
			{user ? <Todos /> : <SignIn />}
		</div>
	);
}

export default App;
