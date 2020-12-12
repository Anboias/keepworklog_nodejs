import React, { useState, useEffect } from 'react';
import data from '../data';
import { db } from '../firebase/firebaseConfig';

import TodolistElement from './TodolistElement';

import { useAuth } from '../firebase/useAuth';

const Todolist = () => {
  const { todos, setTodos } = useAuth();

  return (
    <section id="todolist">
      <div className="container">
        <ul className="todo-list sortable">
          {todos
            .filter((all) => all.status === 'open')
            .map((todo, index) => {
              return <TodolistElement key={index} todo={todo} />;
            })}
        </ul>
      </div>
    </section>
  );
};

export default Todolist;
