import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';

import TodolistElement from './TodolistElement';

const Todolist = ({
  todos,
  updateTodo,
  deleteTodo,
  sortingType,
  handleSortingType,
}) => {
  const nextSortingType = sortingType === 'desc' ? 'asc' : 'desc';

  const handleArchive = () => {
    todos
      .filter((all) => all.completed === true && all.archived === false)
      .map((todo) => {
        const newTodo = { ...todo, archived: true };
        updateTodo(newTodo);
      });
  };
  const handleOrderType = () => {
    handleSortingType(nextSortingType);
  };

  return (
    <section id="todolist">
      <div className="container">
        <ul className="todo-list sortable">
          <li className="item-first">
            <button onClick={handleArchive}>Archive all completed</button>
            <button onClick={handleOrderType}>
              {nextSortingType === 'asc'
                ? 'Show latest first'
                : 'Show newest first'}
            </button>
          </li>
          {todos
            .filter((all) => all.archived === false)
            .map((todo, index) => {
              return (
                <TodolistElement
                  key={index}
                  todo={todo}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Todolist;
