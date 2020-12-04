import React from 'react';
import { useDrop } from 'react-dnd';
import ITEM_TYPE from '../data/types';

import TodolistElement from './TodolistElement';

const Todolist = () => {
  return (
    <section id="todolist">
      <div className="container">
        <ul className="todo-list sortable">
          <TodolistElement />
          <TodolistElement />
          <TodolistElement />
          <TodolistElement />
          <TodolistElement />
          <TodolistElement />
          <TodolistElement />
        </ul>
      </div>
    </section>
  );
};

export default Todolist;
