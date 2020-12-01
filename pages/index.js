import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Worklog from '../components/Worklog';
import Todonew from '../components/Todonew';
import Weeks from '../components/Weeks';
import Todolist from '../components/Todolist';
import Footer from '../components/Footer';

// import { useAuth } from '../utils/old/auth';

import firebase from 'firebase/app';
import 'firebase/auth';
import fire from '../utils/fire';

import Login from '../components/Login';

export default function Home() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      let newUser = user ? user : '';
      if (user) {
        clearInputs();
      }
      setUser(newUser);
    });
  };

  // useEffect(() => {
  //   return fire.auth.onIdTokenChanged(async (user) => {
  //     if (!user) {
  //       setUser(null);
  //       nookies.set(undefined, 'token', '', {});
  //       return;
  //     }
  //     const token = await user.getIdToken();
  //     setUser(user);
  //     nookies.set(undefined, 'token', token, {});
  //   });
  // });

  useEffect(() => {
    authListener();
  }, []);

  return !user ? (
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
    />
  ) : (
    <>
      <Head>
        <title>Keep Worklog</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Google font - Montserrat --> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,200&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Font Awesome --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>
      <div>
        <Navbar handleLogout={handleLogout} />
        <main>
          <Worklog />
          <Todonew />
          <Weeks />
          <Todolist />
          <Footer />
        </main>
      </div>
    </>
  );
}
