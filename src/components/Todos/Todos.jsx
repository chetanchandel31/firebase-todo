import { useState } from "react";
import { auth, firestore } from "../../firebase";
import firebase from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Todo from "./Todo/Todo";

const Todos = () => {
	const [input, setInput] = useState("");

	const todoRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);

	const [todos] = useCollectionData(todoRef, { idField: "id" });

	const signOut = () => auth.signOut();

	const addTodo = e => {
		e.preventDefault();
		todoRef.add({
			todo: input,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			complete: false,
		});
		setInput("");
	};

	return (
		<>
			<button onClick={signOut}>sign out</button>

			<form onSubmit={e => addTodo(e)}>
				<input onChange={e => setInput(e.target.value)} value={input} />
				<button type="submit">+</button>
			</form>
			<div>
				{todos?.map(todo => (
					<Todo key={todo.id} {...todo} />
				))}
			</div>
		</>
	);
};

export default Todos;
