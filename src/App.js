import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Get todos list from localstorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos to localstorage
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    else {
      // Remove todos from localStorage if the list is empty
      localStorage.removeItem('todos');
    }
  }, [todos]);
  

  // Add a new todo
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  // Remove a todo
  const removeTodo = (id) => {
    let finalTodos = todos.filter((todo) => todo.id !== id);
    setTodos(finalTodos); // Remove the todo    
  };

  // Update a todo
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo))); // Update the todo by id
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo List</h1>
      
      <TodoForm addTodo={addTodo} updateTodo={updateTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default App;
