import Reaact, { Fragment, useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { useAuth } from '../firebase/useAuth';

const TodolistElement = ({ todo }) => {
  // const { toggleEvent }

  const handleClick = (e) => {
    console.log('Click event: ', e);
    console.log('Todo: ', JSON.stringify(todo));
  };

  return (
    <li key={todo.id} className="draggable movable-item item">
      <div className={`todo-container ${todo.isDone && 'todo-done'}`}>
        {todo.isDone ? (
          <i className="fas fa-check-circle"></i>
        ) : (
          <>
            <i className="fas fa-ellipsis-v"></i>
            <label className="switch">
              <input type="checkbox" onClick={handleClick} />
              <span className="slider round"></span>
            </label>
            <i className="fas fa-trash-alt"></i>
            <i className="fas fa-pencil-alt"></i>
          </>
        )}
        <p>{todo.content}</p>
      </div>
    </li>
  );
};

export default TodolistElement;
