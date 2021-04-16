import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Todos from "./components/Todos/Todos";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import React, { useState } from "react";

function App() {
	const [user] = useAuthState(auth);
	const [guestUser, setGuestUser] = useState(false);
	console.log(user);

	return (
		<div className="App">
			<h1>Todo</h1>
			{user ? (
				<Todos guestUser={null} setGuestUser={null} />
			) : guestUser ? (
				<Todos guestUser={guestUser} setGuestUser={setGuestUser} />
			) : (
				<SignIn setGuestUser={setGuestUser} />
			)}
		</div>
	);
}

export default App;
