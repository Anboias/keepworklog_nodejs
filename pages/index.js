import React from 'react';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Worklog from '../components/Worklog';
import Todonew from '../components/Todonew';
import Weeks from '../components/Weeks';
import Todolist from '../components/Todolist';
import Footer from '../components/Footer';

import 'firebase/auth';

import { useRequireAuth } from '../firebase/useRequireAuth';
import { dbFunctions } from '../firebase/dbFunctions';

export default function Home() {
  const auth = useRequireAuth();
  const { user, signOut } = auth;

  const {
    handleYearChange,
    handleWeekChange,
    todos,
    setTodos,
    updateTodo,
    deleteTodo,
    todosArchived,
    currentWeekNo,
    setCurrentWeekNo,
    addTodoElement,
    currentYear,
    allWeeksFromYear,
    sortingType,
    handleSortingType,
    getWeekNumbers,
    getDateRangeOfWeek,
    isLoggedIn,
    loading,
  } = dbFunctions();

  return isLoggedIn ? (
    <>
      <Head>
        <meta
          name="description"
          content="Simplest todo app. Designed to easily archive and retrieve your tasks. Keep track of the work done."
        />
        <title>
          Keep track of your work. Easily create and archive your tasks.
        </title>

        <link rel="icon" href="/favicon.ico" />
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
            sortingType={sortingType}
          />
          <Weeks
            todosArchived={todosArchived}
            updateTodo={updateTodo}
            currentWeekNo={currentWeekNo}
            year={currentYear}
          />{' '}
          <Todolist
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            sortingType={sortingType}
            handleSortingType={handleSortingType}
          />
          <Footer />
        </main>{' '}
      </div>{' '}
    </>
  ) : null;

  // <But>
  //   <Navbar handleLogout={null} name={' please authenticate.'} />
  // </Button>
}
