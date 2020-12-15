import React, { useState, useEffect } from 'react';
import data from '../data';
import { db } from '../firebase/firebaseConfig';

import TodolistElement from './TodolistElement';

const Todolist = ({ todos, updateTodo, deleteTodo }) => {
  const handleArchive = () => {
    todos
      .filter((all) => all.completed === true)
      .map((todo) => {
        console.log('this todo: ', todo);
        const newTodo = { ...todo, archived: true };
        console.log('THE NEW todo: ', newTodo);

        updateTodo(newTodo);
      });
    console.log('TODOS after update: ', todos);
  };

  return (
    <section id="todolist">
      <div className="container">
        <br />
        <button onClick={handleArchive}>Archive all</button>
        <ul className="todo-list sortable">
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
