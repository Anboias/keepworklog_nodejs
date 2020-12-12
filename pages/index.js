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
import data from '../data';

// Worklog container
import getDateRangeOfWeek, {
  getWeekNumbers,
} from '../utils/getDateRangeOfWeek';

import { useRequireAuth } from '../firebase/useRequireAuth';
import { useRouter } from 'next/router';

// import { fetchTodoElements } from '../firebase/useAuth';

export default function Home() {
  // Worklog container
  const [currentWeekNo, setCurrentWeekNo] = useState(1);

  let year = 2022;
  const allWeeksFromYear = getWeekNumbers(year);
  // const Week = weeks.map((Week) => Week);
  const handleWeekChange = (e) => {
    setCurrentWeekNo(e.target.value);
  };

  const auth = useRequireAuth();

  useEffect(() => {
    // setTodos(fetchTodoElements('done'));
    // console.log('TODOSSSSSS: ', todos);
    if (auth.user) {
      // fetchTodoElementsLocal();
      auth.fetchTodoElements();
    }
  }, [auth.user]);

  // const fetchTodoElementsLocal = async () => {
  //   console.log('INSIDE index.js START: ');

  //   const allTodos = [];
  //   db.collection('todos')
  //     .doc(auth.user.uid)
  //     .collection('todolist')
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.docs.forEach((todo) => {
  //         console.log('INSIDE index.js: '.snapshot);
  //         let currentID = todo.id;
  //         let appObj = { ...todo.data(), ['id']: currentID };
  //         allTodos.push(appObj);
  //       });
  //       setTodos(allTodos);
  //     })
  //     .catch((error) => {
  //       console.log('Inside index.js USeEffectErrro: ', error);
  //     });
  //   console.log('INSIDE index.js END: ');
  // };

  return (
    <>
      <Head>
        <title> Keep Worklog </title> <link rel="icon" href="/favicon.ico" />{' '}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>{' '}
      <div>
        <Navbar handleLogout={auth.signOut} />{' '}
        <main>
          <Worklog
            currentWeekNo={currentWeekNo}
            setCurrentWeekNo={setCurrentWeekNo}
            getWeekNumbers={getWeekNumbers}
            handleWeekChange={handleWeekChange}
            allWeeksFromYear={allWeeksFromYear}
            getDateRangeOfWeek={getDateRangeOfWeek}
            year={year}
          />{' '}
          <Todonew />
          <Weeks data={data} currentWeekNo={currentWeekNo} year={year} />{' '}
          <Todolist />
          <Footer />
        </main>{' '}
      </div>{' '}
    </>
  );
}
