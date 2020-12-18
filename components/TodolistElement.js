import React, { Fragment, useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { useAuth } from '../firebase/useAuth';
import { getCurrentDate } from '../utils/getCurrentDate';

const TodolistElement = ({ todo, updateTodo, deleteTodo }) => {
  const [value, setValue] = useState('');
  const [editable, setEdit] = useState(false);

  const handleEdit = (e) => {
    console.log('Edit not implemented.');
  };

  const handleSlide = (e) => {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed,
      date: getCurrentDate(),
    };
    updateTodo(updatedTodo);
  };

  const handleDelete = () => {
    console.log('Handle delete');
    deleteTodo(todo);
  };

  const handleSendBack = (e) => {
    // Having completed set to false will overwride the current date on next send
    const newTodo = { ...todo, archived: false, completed: true };
    console.log('handleSendBack');
    updateTodo(newTodo);
  };

  return (
    <li key={todo.id} className="draggable movable-item item">
      <div className={`${todo.completed ? ' todo-done' : 'todo-container'}`}>
        {todo.archived ? (
          <i className="fas fa-check-circle" onClick={handleSendBack}></i>
        ) : (
          <>
            <i className="fas fa-ellipsis-v"></i>
            <label className="switch">
              <input
                type="checkbox"
                defaultChecked={todo.completed}
                onClick={handleSlide}
              />
              <span className="slider round"></span>
            </label>
            <i className="fas fa-trash-alt" onClick={handleDelete}></i>
            <i className="fas fa-pencil-alt" onClick={handleEdit}></i>
          </>
        )}
        <p>{todo.content}</p>
      </div>
    </li>
  );
};

export default TodolistElement;
