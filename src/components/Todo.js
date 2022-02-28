import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
	//events
	const deleteHandler = () => {
		setTodos(todos.filter((Element) => Element.id !== todo.id)); // filter untuk menemukan nilai yang sama dri yang ada di state
		// console.log (todo);
	};

	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
                if (item.id === todo.id) {
                    // console.log (item)
                    return {
						item,
						completed: !item.completed,
					};
				}
			})
		);
	};

	return (
		<div className="todo">
			<li className = "todo-item">
				{text}
			</li>
			<button onClick={completeHandler} className="complete-btn">
				<i className="fas fa-check"></i>
			</button>
			<button onClick={deleteHandler} className="trash-btn">
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default Todo;
