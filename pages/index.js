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

  const auth = useRequireAuth();
  const { user, fetchTodoElements, signOut } = auth;

  const router = useRouter();

  const [currentWeekNo, setCurrentWeekNo] = useState(1);

  let isLoaded = false;

  let year = 2022;

  const allWeeksFromYear = getWeekNumbers(year);
  // const Week = weeks.map((Week) => Week);
  const handleWeekChange = (e) => {
    setCurrentWeekNo(e.target.value);
  };

  useEffect(() => {
    console.log('INDEX: ', user);
    if (user) {
      fetchTodoElements();
    } else {
      console.log('INDEX ELSE', user);
      // router.push('/login');
    }
  }, [user]);

  const loading = false;

  useEffect(() => {
    isLoaded = false;
    if (!(user || loading)) {
      console.log('LOADING: ', loading);
      console.log('USER: ', user);
      // TBD. Routes to login after refresh
      // router.push('/login');
    } else {
      console.log('LOADING2: ', loading);
      console.log('USER2: ', user);
      if (!user?.name) {
        if (!isLoaded) {
          isLoaded = true;
        } else {
          isLoaded = false;
          // router.push('/login');
        }
      }
    }
    console.log('isLoaded: ', isLoaded);
    console.log('userName: ', user?.name);
    console.log('------------------------------: ');
  }, [user, loading]);

  return user?.name ? (
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
        <Navbar handleLogout={signOut} name={user?.name} />{' '}
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
  ) : (
    <>
      <Navbar handleLogout={null} name={' please login.'} />
    </>
  );
}
