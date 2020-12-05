import React from 'react';
import { useDrop } from 'react-dnd';
import ITEM_TYPE from '../data/types';

import TodolistElement from './TodolistElement';

const Todolist = ({ data }) => {
  return (
    <section id="todolist">
      <div className="container">
        <ul className="todo-list sortable">
          {data
            .filter((all) => all.status === 'open')
            .map((todo) => {
              return <TodolistElement todo={todo} />;
            })}
        </ul>
      </div>
    </section>
  );
};

export default Todolist;
