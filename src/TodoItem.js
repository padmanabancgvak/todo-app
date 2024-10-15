import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    removeTodo(todo.id); // Delete todo by id
  };

  const handleEdit = () => {
    setIsEditing(true); // Set edit mode to true
  };

  const handleUpdate = (updatedTodo) => {
    updateTodo(todo.id, updatedTodo); // Update the todo
    setIsEditing(false); // Turn off edit mode
  };

  // Function to toggle the completed state
  const handleComplete = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodo(todo.id, updatedTodo);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <TodoForm editTodo={todo} updateTodo={handleUpdate} />
      ) : (
        <div className="d-flex justify-content-between w-100 align-items-center">
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleComplete} // Toggle completed state
                />
                <span
                    style={{
                    textDecoration: todo.completed ? 'line-through' : 'none', // Strike-through if completed
                    marginLeft: '10px'
                    }}
                >
                    {todo.text}
                </span>
            </div>
            <div className="btn-group">
                <button className="btn btn-warning" onClick={handleEdit}>
                Edit
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                Delete
                </button>
            </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
