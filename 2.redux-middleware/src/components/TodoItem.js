import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAsync, toggleCompleteAsync } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {

	const dispatch = useDispatch();
	const handleCompleteClick = () => {
		dispatch(toggleCompleteAsync({
			id,
			completed: !completed
		}));
		console.log("changed state", title)
	}

	const handleDeleteClick = () => {
		console.log("clicked!")
		dispatch(deleteTodoAsync({ id }));
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onChange={handleCompleteClick}>
					</input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;