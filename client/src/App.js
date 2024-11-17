import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './styles.css';

const App = () => {
    const [todos, setTodos] = useState([]);

    // Fetch all todos
    useEffect(() => {
        axios.get('https://task9-fullstacktodo.onrender.com/todos')
            .then((res) => setTodos(res.data))
            .catch((err) => console.error(err));
    }, []);

    // Add a new todo
    const addTodo = (todo) => {
        axios.post('https://task9-fullstacktodo.onrender.com/todos', todo)
            .then((res) => setTodos([...todos, res.data]))
            .catch((err) => console.error(err));
    };

    // Update a todo
    const updateTodo = (id, updatedTodo) => {
        axios.put(`https://task9-fullstacktodo.onrender.com/todos/${id}`, updatedTodo)
            .then((res) => {
                const updatedTodos = todos.map((todo) =>
                    todo._id === id ? res.data : todo
                );
                setTodos(updatedTodos);
            })
            .catch((err) => console.error(err));
    };

    // Delete a todo
    const deleteTodo = (id) => {
        axios.delete(`https://task9-fullstacktodo.onrender.com/todos/${id}`)
            .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
            .catch((err) => console.error(err));
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
};

export default App;
