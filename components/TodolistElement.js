import React, { Fragment, useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { useAuth } from '../firebase/useAuth';

const TodolistElement = ({ todo, updateTodo, deleteTodo }) => {
  const [value, setValue] = useState('');
  const [editable, setEdit] = useState(false);

  const handleEdit = (e) => {
    console.log('handleEdit not implemented.');
  };

  const handleSlide = (e) => {
    const newTodo = { ...todo, completed: !todo.completed };
    console.log('handleSlide. newTodo: ', newTodo);
    // Set date field to today. Make util function to extract it
    updateTodo(newTodo);
  };

  const handleDelete = () => {
    console.log('Handle delete');
    deleteTodo(todo);
  };

  const handleSendBack = (e) => {
    const newTodo = { ...todo, archived: false };
    console.log('handleSendBack');
    updateTodo(newTodo);
  };

  return (
    <li key={todo.id} className="draggable movable-item item">
      <div className={`todo-container ${todo.completed && 'todo-done'}`}>
        {todo.archived ? (
          <i className="fas fa-check-circle" onClick={handleSendBack}></i>
        ) : (
          <>
            <i className="fas fa-ellipsis-v"></i>
            <label className="switch">
              <input type="checkbox" onClick={handleSlide} />
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
