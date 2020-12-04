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
import authenticate from '../firebase/authenticate';

export default function Home() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    handleLogout,
    setHasAccount,
    hasAccount,
    emailError,
    passwordError,
    user,
  } = authenticate();

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
