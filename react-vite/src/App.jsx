import React, { useState, useEffect } from 'react';
import './App.css';

const TodoItem = ({ data, onItemClick }) => {
  return (
    <li className="todo-item">
      <span
        style={{ textDecoration: data.isDone ? 'line-through' : undefined }}
        onClick={onItemClick}
        className="todo-item__content"
      >
        {data.content}
      </span>
      <span className="deleteBtn">Delete</span>
    </li>
  );
};

export default function () {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleOnAddItem = () => {
    if (!value.length) return;

    const item = { content: value, isDone: false };
    setTodos((prev) => [...prev, item]);
    setValue('');
  };

  const handleOnItemClick = (index) => {
    const tmp = [...todos]; // spread operator
    tmp[index].isDone = !tmp[index].isDone;

    setTodos(tmp);
  };

  return (
    <div className="box">
      <h2>Todo list</h2>
      <div className="controls">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="text"
        />
        <button onClick={handleOnAddItem}>+</button>
      </div>
      <ul className="todo-wrapper">
        {todos.map((todo, index) => (
          <TodoItem data={todo} onItemClick={() => handleOnItemClick(index)} />
        ))}
      </ul>
    </div>
  );
}
