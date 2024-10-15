import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo, updateTodo }) => {
  const [input, setInput] = useState(editTodo ? editTodo.text : '');

  // When editing, populate the form with the existing todo
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (editTodo) {
      // If editing, update the todo instead of adding a new one
      let updated = { ...editTodo, text: input };
      updateTodo(updated);
    } else {
      addTodo({
        id: Math.floor(Math.random() * 10000),
        text: input,
        completed: false,
      });
    }

    setInput(''); // Clear the input
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <div className="form-group m-2 d-flex">
        <input
          type="text"
          className="form-control me-1"
          placeholder="Add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" style={{ minWidth: '150px' }}>
          {editTodo ? 'Update' : 'Add'} Todo
        </button>
      </div>
      
    </form>
  );
};

export default TodoForm;
