import React from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const handleToggleComplete = () => {
    updateTodo(todo._id, { ...todo, completed: !todo.completed });
  };

  return (
    <div className="todo-item">
      <h3 style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.title}
      </h3>
      <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.description}</p>
      <div className="button-container">
        <button className="mark-button" onClick={handleToggleComplete}>
          {todo.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button className="delete-button" onClick={() => deleteTodo(todo._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
