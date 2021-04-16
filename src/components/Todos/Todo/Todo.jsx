// import { auth, firestore } from "../../../firebase";

const Todo = ({ todo, complete, id, collectionRef }) => {
	// const todoRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);

	const updateTodo = id => collectionRef.doc(id).set({ complete: !complete }, { merge: true });
	const deleteTodo = id => collectionRef.doc(id).delete();

	return (
		<p>
			<span onClick={() => updateTodo(id)}>
				{complete && "✔️"} {todo}
			</span>{" "}
			<button onClick={() => deleteTodo(id)}> delete </button>
		</p>
	);
};

export default Todo;
