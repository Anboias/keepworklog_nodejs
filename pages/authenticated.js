import React from 'react';
import nookies from 'nookies';
import { verifyIdToken } from '../utils/firebaseAdmin';
import firebaseClient from '../utils/firebaseClient';
import firebase from 'firebase/app';

function Authenticated({ session }) {
  firebaseClient();

  if (session) {
    return (
      <div>
        <h1>User is authenticated. Session: {session}</h1>
        <button
          onClick={async () => {
            await firebase.auth().signOut();
            window.location.href = '/';
          }}
        >
          Sign out
        </button>
      </div>
    );
  } else {
    <div>
      <h1>Loading...</h1>
    </div>;
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;
    return {
      props: { session: `Your email is ${email} and your UID is ${uid}` },
    };
  } catch (err) {
    context.res.writeHead(302, { location: '/login' });
    context.res.end();
    return { props: [] };
  }
}

export default Authenticated;
