import styles from '../styles/index.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// import { AuthProvider } from '../utils/old/auth.js';

import firebase from 'firebase/app';
import 'firebase/auth';
import fire from '../utils/fire';

import Login from '../components/Login';

function MyApp({ Component, pageProps }) {
  return (
    // <DndProvider backend={HTML5Backend}>
    <Component {...pageProps} />
    // </DndProvider>
  );
}

export default MyApp;
