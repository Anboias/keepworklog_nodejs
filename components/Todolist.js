import React, { useState, useEffect } from 'react';
import data from '../data';
import { useAuth } from '../firebase/useAuth';
import { db } from '../firebase/firebaseConfig';

import TodolistElement from './TodolistElement';


const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState(0);

  const auth = useAuth();

    useEffect(()=>{
        fetchTodoElements();
    },[])
    
  const fetchTodoElements = async () => {
    const allTodos = [];
    db
    .collection('todos')
    .doc('8ltzk8ewXbP3toQ4EVwH2PEPVQl2')
    .collection('todolist')
    .get()
        .then(snapshot => {
            snapshot.docs.forEach(todo => {
                let currentID = todo.id
                let appObj = { ...todo.data(), ['id']: currentID }
                allTodos.push(appObj)
        })
        setTodos(allTodos)
    })
  };
  
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
