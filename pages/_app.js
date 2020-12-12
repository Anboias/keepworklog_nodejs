import styles from '../styles/index.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { AuthProvider } from '../firebase/useAuth';

function MyApp({ Component, pageProps }) {
  return (
    // <DndProvider backend={HTML5Backend}>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    // </DndProvider>
  );
}

export default MyApp;
