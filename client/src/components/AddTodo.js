import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return alert('Title is required');
        addTodo({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="todo-input"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="todo-input"
                />
            </div>
            <div className="add-todo-button-container">
                <button type="submit" className="add-todo-button">Add To-Do</button>
            </div>
        </form>
    );
};

export default AddTodo;
