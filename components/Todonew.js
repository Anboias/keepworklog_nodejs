import React, { useState, useEffect } from 'react';
import data from '../data';
import { useAuth } from '../firebase/useAuth';
import { db } from '../firebase/firebaseConfig';

const Todonew = () => {
  const [todos, setTodos] = useState(null);
  const [value, setValue] = useState('');
  const [userId, setUserId] = useState(0);

  const auth = useAuth();

  useEffect(() => {
    // Update the document title using the browser API
    setTodos(fetchTodoList());
    // console.log('Auth: ', auth.user);
  }, [userId]);

  const addNewTodoElement = async (newTodo) => {
    try {
      await db
      .collection('todos')
      .doc(auth.user.uid)
      .collection('todolist').doc('4')
      .set(newTodo);
      console.log('Success. New todo added');
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchTodoElements = () => {
  //   return db
  //     .collection('todos')
  //     .doc('8ltzk8ewXbP3toQ4EVwH2PEPVQl2')
  //     .collection('todolist')
  //     .get()
  //     .then((response) => {
  //       return response
  //     });
  // };
  
  // const fetchTodoElements2 = async () => {
  //   try {
  //     await db
  //     .collection('todos').doc(auth.user.uid)
  //     .collection('todolist')
  //     .get()
  //     .then(response => response)
  //     console.log('Success. Todo list added');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetch('../data', {
  //     method: 'PUT'
  //   })
  //     .then((res) => res.json())
  //     .then((videos) => videos.filter((video) => {
  //       return video.id === videoID;
  //     }))
  //     .then((matched) => setVideo(matched[0]));
  // }, []);

  const fetchTodoList = () => {
    // alert('oook');
    return data.filter((todoEL) => todoEL.status === 'open');
  };

  const handleClick = (e) => {
    let newTodo = {};
    newTodo.id = '20';
    newTodo.status = 'open';
    newTodo.date = '20210104';
    newTodo.content = value;

    setTodos([...todos, newTodo]);
    setValue('');
    addNewTodoElement(newTodo);
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
            placeholder="Add a new task. Keep it simple. Around 150 chars should be enough."
            maxLength="150"
          />
          <br />
        </form>{' '}
        {/* <p>WTF {JSON.stringify(todos)}</p> */} {/* <p>WTF {value}</p> */}{' '}
      </div>{' '}
    </section>
  );
};

export default Todonew;
