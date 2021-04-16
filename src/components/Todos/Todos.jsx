import { useState } from "react";
import { auth, firestore } from "../../firebase";
import firebase from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Todo from "./Todo/Todo";

const Todos = ({ guestUser, setGuestUser }) => {
	const [input, setInput] = useState("");

	const todoRef = firestore.collection(`users/${auth?.currentUser?.uid}/todos`);
	const guestCollectionRef = firestore.collection(`users/Z7kfvIWF7sjpGhd5fQLB/todos`);
	const collectionRef = guestUser ? guestCollectionRef : todoRef;

	const [todos] = useCollectionData(collectionRef, { idField: "id" });

	const signOut = () => {
		if (guestUser) return setGuestUser(false);
		auth.signOut();
	};

	const addTodo = e => {
		e.preventDefault();
		if (!input) return alert("do you really want to remember to do nothing? 🤔");
		collectionRef.add({
			todo: input,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			complete: false,
		});
		setInput("");
	};

	return (
		<>
			<button onClick={signOut}>sign out</button>
			<br /> <br />
			<form onSubmit={e => addTodo(e)}>
				<input onChange={e => setInput(e.target.value)} value={input} />
				<button type="submit">+</button>
			</form>
			<div>
				{todos?.map(todo => (
					<Todo key={todo.id} {...todo} collectionRef={collectionRef} />
				))}
			</div>
		</>
	);
};

export default Todos;
