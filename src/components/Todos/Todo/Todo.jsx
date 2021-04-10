import { auth, firestore } from "../../../firebase";

const Todo = ({ todo, complete, id }) => {
	const todoRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
	const updateTodo = id => todoRef.doc(id).set({ complete: !complete }, { merge: true });
	const deleteTodo = id => todoRef.doc(id).delete();

	return (
		<p>
			<span onClick={() => updateTodo(id)}>
				{complete && "✔️"} {todo}
			</span>
			<button onClick={() => deleteTodo(id)}> 🚮 </button>
		</p>
	);
};

export default Todo;
