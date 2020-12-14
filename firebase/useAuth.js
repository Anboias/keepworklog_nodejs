import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react';

import { auth, db } from './firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

const authContext = createContext({ user: {} });

const { Provider } = authContext;

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <Provider value={auth}>{children}</Provider>;
}
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates an auth object and handles its state
const useAuthProvider = () => {
  const [user, setUser] = useState(null);
  const [testValue, setTestValue] = useState(1);
  const [todos, setTodos] = useState([]);

  console.log('Inside useAuth', user);

  const createUser = async (user) => {
    try {
      await db.collection('users').doc(user.uid).set(user);
      setUser(user);
      return user;
    } catch (error) {
      return { error };
    }
  };

  const signUp = async ({ name, email, password }) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      auth.currentUser.sendEmailVerification();
      return createUser({ uid: response.user.uid, email, name });
    } catch (error) {
      return { error };
    }
  };

  const signIn = async ({ email, password }) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      setUser(response.user);
      getUserAdditionalData(user);
      return response.user;
    } catch (error) {
      return { error };
    }
  };
  const getUserAdditionalData = (user) => {
    return db
      .collection('users')
      .doc(user.uid)
      .get()
      .then((userData) => {
        if (userData.data()) {
          setUser(userData.data());
        }
      });
  };

  const handleAuthStateChanged = (user) => {
    console.log('Inside 1st useEffect. handleAuthStateChanged', user);

    setUser(user);
    if (user) {
      getUserAdditionalData(user);
    }
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(handleAuthStateChanged);

    console.log('Inside 1st useEffect', user);

    return () => unsub();
  }, []);

  useEffect(() => {
    if (user?.uid) {
      // Subscribe to user document on mount
      const unsubscribe = db
        .collection('users')
        .doc(user.uid)
        .onSnapshot((doc) => setUser(doc.data()));
      return () => unsubscribe();
    }
  }, []);

  const signOut = async () => {
    await auth.signOut();
    return setUser(false);
  };

  const sendPasswordResetEmail = async (email) => {
    const response = await auth.sendPasswordResetEmail(email);
    return response;
  };

  const fetchTodoElements = async () => {
    const allTodos = [];
    db.collection('todos')
      .doc(user.uid)
      .collection('todolist')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((todo) => {
          let currentID = todo.id;
          let appObj = { ...todo.data(), ['id']: currentID };
          allTodos.push(appObj);
        });
        setTodos(allTodos);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
    console.log('Success');
  };

  const addTodoElement = async (newTodo) => {
    try {
      await db
        .collection('todos')
        .doc(user.uid)
        .collection('todolist')
        .doc(uuidv4())
        .set(newTodo);
      console.log('Success. New todo added');
    } catch (error) {
      console.log('Error on adding todo element: ' + error);
    }
  };

  // Not working yet. Called from TodolistElement
  const updateTodo = async (todo) => {
    console.log('user.id: ', user.uid);
    try {
      await db
        .collection('todos')
        .doc(user.uid)
        .collection('todolist')
        .doc(todo.id)
        .update({
          content: todo.content,
          isDone: todo.isDone,
        });
    } catch (error) {
      console.log('Error on updating the todo element: ' + error);
    }
  };

  return {
    user,
    signUp,
    signIn,
    getUserAdditionalData,
    signOut,
    sendPasswordResetEmail,
    addTodoElement,
    updateTodo,
    testValue,
    setTestValue,
    fetchTodoElements,
    todos,
    setTodos,
  };
};
