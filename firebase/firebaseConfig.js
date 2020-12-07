import firebase from 'firebase';

const FIREBASE_CONFIG = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const fire = !firebase.apps.length ?
  firebase.initializeApp(FIREBASE_CONFIG) :
  null;

// export const db = firebase.firestore();

export default fire;

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';
// export const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// const app = firebase.app();
// const auth = firebase.auth();
// const db = firebase.firestore();
// const now = firebase.firestore.Timestamp.now();
// const storage = firebase.storage();
// export { auth, db, now, storage };
// console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');