import Reaact, { Fragment, useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { useAuth } from '../firebase/useAuth';

const TodolistElement = ({ todo, updateTodo }) => {
  const handleClick = (e) => {
    console.log('Not implemented.');
  };

  const handleSlide = (e) => {
    const newTodo = { ...todo, completed: !todo.completed };

    console.log('handleSlide. newTodo: ', newTodo);

    updateTodo(newTodo);
  };

  return (
    <li key={todo.id} className="draggable movable-item item">
      <div className={`todo-container ${todo.completed && 'todo-done'}`}>
        {todo.archived ? (
          <i className="fas fa-check-circle"></i>
        ) : (
          <>
            <i className="fas fa-ellipsis-v"></i>
            <label className="switch">
              <input type="checkbox" onClick={handleSlide} />
              <span className="slider round"></span>
            </label>
            <i className="fas fa-trash-alt" onClick={handleClick}></i>
            <i className="fas fa-pencil-alt" onClick={handleClick}></i>
          </>
        )}
        <p>{todo.content}</p>
      </div>
    </li>
  );
};

export default TodolistElement;
