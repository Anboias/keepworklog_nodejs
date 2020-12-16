import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';

import TodolistElement from './TodolistElement';

const Todolist = ({ todos, updateTodo, deleteTodo }) => {
  const handleArchive = () => {
    todos
      .filter((all) => all.completed === true && all.archived === false)
      .map((todo) => {
        const newTodo = { ...todo, archived: true };
        updateTodo(newTodo);
      });
  };

  const copyList = () => {
    todos.filter((all) => {
      updateTodo(all);
    });
  };

  return (
    <section id="todolist">
      <div className="container">
        <ul className="todo-list sortable">
          <button onClick={handleArchive}>Archive all done</button>
          <button onClick={copyList}>Copy list</button>
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
