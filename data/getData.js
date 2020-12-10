// Not working

import React, { useState, useEffect } from 'react';

import 'firebase/auth';
import { db } from '../firebase/firebaseConfig';

import { useRequireAuth } from '../firebase/useRequireAuth';

const fetchTodoElements = async ({ status }) => {
  console.log('Inside getData. Status: ', status);

  let allTodos = [];

  db.collection('todos')
    .doc('8ltzk8ewXbP3toQ4EVwH2PEPVQl2')
    .collection('todolist')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((todo) => {
        let currentID = todo.id;
        let appObj = { ...todo.data(), ['id']: currentID };
        allTodos.push(appObj);
      });
      console.log('2Allll TODOSSSSSS: ', allTodos);

      //   setTodos(allTodos);
    })
    .catch((error) => {
      console.log('Inside getData. Error: ', error);
    });
  console.log('3Allll TODOSSSSSS: ', allTodos);

  return allTodos ? allTodos : [];
};

export default fetchTodoElements;
