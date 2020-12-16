import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Worklog from '../components/Worklog';
import Todonew from '../components/Todonew';
import Weeks from '../components/Weeks';
import Todolist from '../components/Todolist';
import Footer from '../components/Footer';

import 'firebase/auth';
import { db } from '../firebase/firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

// Worklog container
import getDateRangeOfWeek, {
  getWeekNumbers,
  getWeekNumber,
} from '../utils/getDateRangeOfWeek';

import { useRequireAuth } from '../firebase/useRequireAuth';
import { useRouter } from 'next/router';

export default function Home() {
  const thisYear = new Date().getFullYear();
  const thisWeek = getWeekNumber();

  const auth = useRequireAuth();
  const { user, signOut } = auth;

  const router = useRouter();

  const [currentYear, setCurrentYear] = useState(thisYear);
  const [currentWeekNo, setCurrentWeekNo] = useState(thisWeek);

  let isLoaded = false;

  const allWeeksFromYear = getWeekNumbers(currentYear);

  const handleWeekChange = (e) => {
    setCurrentWeekNo(e.target.value);
  };

  const handleYearChange = (e) => {
    let selectedYear = parseInt(e.target.value);

    setCurrentYear(selectedYear);
    setCurrentWeekNo(selectedYear === thisYear ? thisWeek : 1);
  };

  useEffect(() => {
    // console.log('INDEX: ', user);
    if (user) {
      fetchTodoElements();
    } else {
      // console.log('INDEX ELSE', user);
      // router.push('/login');
    }
  }, [user]);

  const loading = false;

  useEffect(() => {
    isLoaded = false;
    if (!(user || loading)) {
      // console.log('USER: ', user);
      // TBD. Routes to login after refresh
      // router.push('/login');
    } else {
      // console.log('LOADING2: ', loading);
      // console.log('USER2: ', user);
      if (!user?.name) {
        if (!isLoaded) {
          isLoaded = true;
        } else {
          isLoaded = false;
          // router.push('/login');
        }
      }
    }
  }, [user, loading]);

  const [todos, setTodos] = useState([]);

  const fetchTodoElements = async () => {
    const allTodos = [];
    db.collection('todos')
      .doc(user.uid)
      .collection('todolist')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((todo) => {
          let currentID = todo.id;
          let appObj = { ...todo.data(), ['id']: currentID };
          allTodos.push(appObj);
        });
        setTodos(allTodos);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
    console.log('Success');
  };

  const addTodoElement = async (newTodo) => {
    try {
      await db
        .collection('todos')
        .doc(user.uid)
        .collection('todolist')
        .doc(uuidv4())
        .set(newTodo)
        .then(() => {
          console.log('New todo added. Now fetch the list again.');
          fetchTodoElements();
        });
      console.log('Success. New todo added');
    } catch (error) {
      console.log('Error on adding todo element: ' + error);
    }
  };

  const deleteTodo = async (todo) => {
    try {
      await db
        .collection('todos')
        .doc(user.uid)
        .collection('todolist')
        .doc(todo.id)
        .delete()
        .then(() => {
          console.log('Todo deleted.');
          fetchTodoElements();
        });
      console.log('Success. Todo deleted.');
    } catch (error) {
      console.log('Error on deleting todo element: ' + error);
    }
  };

  const updateTodo = async (todo) => {
    try {
      await db
        .collection('todos')
        .doc(user.uid)
        .collection('todolist')
        .doc(todo.id)
        .update({
          content: todo.content,
          completed: todo.completed,
          archived: todo.archived,
          date: todo.date,
        })
        .then(() => {
          console.log('Todo updated. Now fetch the list again.', todo);
          fetchTodoElements();
        });
    } catch (error) {
      console.log('Error on updating the todo element: ' + error);
    }
  };

  return user?.name ? (
    <>
      <Head>
        <title> Keep Worklog </title> <link rel="icon" href="/favicon.ico" />
        {/* <!-- Google font - Montserrat --> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Font Awesome --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>{' '}
      <div>
        <Navbar handleLogout={signOut} name={user?.name} />{' '}
        <main>
          <Worklog
            currentWeekNo={currentWeekNo}
            currentYear={currentYear}
            setCurrentWeekNo={setCurrentWeekNo}
            getWeekNumbers={getWeekNumbers}
            handleWeekChange={handleWeekChange}
            handleYearChange={handleYearChange}
            allWeeksFromYear={allWeeksFromYear}
            getDateRangeOfWeek={getDateRangeOfWeek}
          />{' '}
          <Todonew
            todos={todos}
            setTodos={setTodos}
            addTodoElement={addTodoElement}
          />
          <Weeks
            todos={todos}
            updateTodo={updateTodo}
            currentWeekNo={currentWeekNo}
            year={currentYear}
          />{' '}
          <Todolist
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
          <Footer />
        </main>{' '}
      </div>{' '}
    </>
  ) : (
    <>
      <Navbar handleLogout={null} name={' please login.'} />
    </>
  );
}
