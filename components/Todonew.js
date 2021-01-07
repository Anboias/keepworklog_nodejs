import React, { useState, useEffect } from 'react';
import { useAuth } from '../firebase/useAuth';
import { db } from '../firebase/firebaseConfig';

const Todonew = ({ todos, setTodos, addTodoElement, sortingType }) => {
  const [value, setValue] = useState('');
  const [userId, setUserId] = useState(0);

  const auth = useAuth();

  useEffect(() => {
    // Update the document title using the browser API
    // console.log('Auth: ', auth.user);
  }, [userId]);

  const handleClick = (e) => {
    let newTodo = {};
    newTodo.orderId = '20';
    newTodo.completed = value.includes('done') ? true : false;
    newTodo.date = null;
    newTodo.content = value;
    newTodo.archived = false;

    if (value) {
      setTodos(
        sortingType === 'desc' ? [newTodo, ...todos] : [...todos, newTodo]
      );
      addTodoElement(newTodo);
    }
    setValue('');
    e.preventDefault();

    // setTodos(oldTodos => [...oldTodos, e.target.value]);
  };

  return (
    <section id="todonew">
      <div className="container">
        <form autoComplete="off">
          <button onClick={handleClick}>
            <i className="fas fa-plus-circle fa-3x"> </i>{' '}
          </button>{' '}
          {/* <h1>DATA {JSON.stringify(data}</h1> */}{' '}
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            id="fname"
            name="fname"
            placeholder="Add a new task."
            // maxLength="150"
          />
          <br />
        </form>{' '}
        {/* <p>WTF {JSON.stringify(todos)}</p> */} {/* <p>WTF {value}</p> */}{' '}
      </div>{' '}
    </section>
  );
};

export default Todonew;
