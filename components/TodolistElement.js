import Reaact, { Fragment, useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import ITEM_TYPE from '../data/types';

const TodolistElement = () => {
  const isDone = false;

  return (
    <li className="draggable movable-item item">
      <div className={`todo-container ${isDone && 'todo-done'}`}>
        {isDone ? (
          <i className="fas fa-check-circle"></i>
        ) : (
          <>
            <i className="fas fa-ellipsis-v"></i>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <i className="fas fa-trash-alt"></i>
            <i className="fas fa-pencil-alt"></i>
          </>
        )}

        <p>TEEEEEEST</p>
      </div>
    </li>
  );
};

export default TodolistElement;
