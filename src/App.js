import { useState } from 'react';

function App() {
	let [value, setValue] = useState('');
	let [todo, setTodo] = useState([
		{
			id: 1,
			userName: 'Asilbek',
			isComplete: false,
		},
	]);

	function inpChange(evt) {
		setValue(evt.target.value);
	}

	function getTodos(evt) {
		evt.preventDefault();

		const obj = {
			id: todo[todo.length - 1].id + 1,
			userName: value,
			isComplete: false,
		};
		setTodo([...todo, obj]);
		console.log(obj);
	}

	function clickedFn(evt) {
		if (evt.target.matches('.btn-edit')) {
			const editedTodoId = Number(evt.target.dataset.id);
			todo[editedTodoId - 1].userName = prompt();
			setTodo([...todo]);
		}

		if (evt.target.matches('.btn-delete')) {
			const deletedTodoid = Number(evt.target.dataset.id);
			const foundIndexTodo = todo.findIndex(function (element) {
				return element.id === deletedTodoid;
			});
			todo.splice(foundIndexTodo, 1);
			setTodo([...todo]);
		}
		if (evt.target.matches('.input-checkbox')) {
			const inputCheckboxId = Number(evt.target.dataset.id);
			todo[inputCheckboxId - 1].isComplete =
				!todo[inputCheckboxId - 1].isComplete;
			if (todo[inputCheckboxId - 1].isComplete === true) {
				console.log(evt.target);
			}
		}
	}
	return (
		<>
			<form className='form' onSubmit={getTodos}>
				<input
					className='contact-inp'
					type='text'
					name='user_search'
					placeholder='Search for a country…'
					onChange={inpChange}
				/>
				<button className='btn' type='submit'>
					Submit
				</button>
			</form>
			<h1 className='title'>TODOS</h1>
			<ul className='list' onClick={clickedFn}>
				{todo.map((todo) => (
					<li className='item' key={todo.id}>
						<input
							className='input-checkbox'
							type='checkbox'
							data-id={todo.id}
						/>
						<p className='item-text'>{todo.userName}</p>
						<button className='btn btn-edit' data-id={todo.id}>
							EDIT
						</button>
						<button className='btn btn-delete' data-id={todo.id}>
							DELETE
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
