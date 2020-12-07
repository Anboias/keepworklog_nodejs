import styles from '../styles/index.scss';
import {
  DndProvider
} from 'react-dnd';
import {
  HTML5Backend
} from 'react-dnd-html5-backend';

import { AuthProvider } from '../firebase/useAuth';

import firebase from 'firebase/app';
import 'firebase/auth';
import fire from '../firebase/firebaseConfig';

import Login from '../components/Login';

function MyApp({
  Component,
  pageProps
}) {
  return (
    // <DndProvider backend={HTML5Backend}>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>

    // </DndProvider>
  );
}

export default MyApp;