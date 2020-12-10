import React, { useState, useEffect } from 'react';
import data from '../data';
import { useAuth } from '../firebase/useAuth';
import { db } from '../firebase/firebaseConfig';

import TodolistElement from './TodolistElement';


const Todolist = ({todos }) => {

  return (
    <section id="todolist">
      <div className="container">
        <ul className="todo-list sortable">
          {todos
            .filter((all) => all.status === 'open')
            .map((todo, index) => {
              return <TodolistElement key={index} todo={todo} />;
            }) 
          }
        </ul>
      </div>
    </section>
  );
};

export default Todolist;
