import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Worklog from '../components/Worklog';
import Todonew from '../components/Todonew';
import Weeks from '../components/Weeks';
import Todolist from '../components/Todolist';
import Footer from '../components/Footer';

// import { useAuth } from '../utils/old/auth';

import 'firebase/auth';

import Login from '../components/Login';

import data from '../data';

// Worklog container
import getDateRangeOfWeek, {
  getWeekNumbers,
} from '../utils/getDateRangeOfWeek';

import { signOut } from '../firebase/useAuth';
import { useRequireAuth } from '../firebase/useRequireAuth';
import { useRouter } from 'next/router';

export default function Home() {
  // Worklog container
  const [currentWeekNo, setCurrentWeekNo] = useState(1);
  const router = useRouter();

  let year = 2022;
  const allWeeksFromYear = getWeekNumbers(year);
  // const Week = weeks.map((Week) => Week);
  const handleWeekChange = (e) => {
    setCurrentWeekNo(e.target.value);
  };

  const handleLogout = () => {};
  const auth = useRequireAuth();

  const useUser = () => ({ user: auth.user, loading: false });

  const { user, loading } = useUser();

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/login');
    }
  }, [user, loading]);

  return !user ? null : (
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
          <Todolist data={data} /> <Footer />
        </main>{' '}
      </div>{' '}
    </>
  );
}
