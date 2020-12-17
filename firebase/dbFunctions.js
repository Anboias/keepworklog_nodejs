import { useState, useEffect } from 'react';

import { auth, db } from './firebaseConfig';
import { useRequireAuth } from '../firebase/useRequireAuth';

import { useRouter } from 'next/router';

import { v4 as uuidv4 } from 'uuid';

// Worklog container
import getDateRangeOfWeek, {
  getWeekNumbers,
  getWeekNumber,
} from '../utils/getDateRangeOfWeek';

export const dbFunctions = () => {
  const auth = useRequireAuth();
  const { user, signOut } = auth;

  let loading = false;
  let isLoaded = false;

  const router = useRouter();

  // useEffect(() => {
  //   console.log('Component did mount?', user, loading);
  //   if (!user) {
  //     if (!loading) loading = true;
  //     else if (loading) router.push('/login');
  //   } else {
  //     console.log('User not false: ', user);
  //   }
  // }, [loading]);
  // useEffect(() => {
  //   console.log('Is loading?', loading);
  // }, [loading]);

  const thisYear = new Date().getFullYear();
  const thisWeek = getWeekNumber();

  // Current year hook
  const [currentYear, setCurrentYear] = useState(thisYear);
  const allWeeksFromYear = getWeekNumbers(currentYear);

  // Current week hook
  const [currentWeekNo, setCurrentWeekNo] = useState(thisWeek);

  // Current order id hook
  const [currentOrderId, setCurrentOrderId] = useState(0);
  useEffect(() => {
    if (user) {
      setCurrentOrderId(user.latestOrderId);
    }
  }, [user]);

  // Sorting type hook
  const [sortingType, setSortingType] = useState(null);
  useEffect(() => {
    if (user) {
      setSortingType(user.sortingType);
    }
  }, [user]);

  // Initialize lists
  useEffect(() => {
    if (user && sortingType) {
      fetchTodoElements(sortingType);
      fetchTodoElementsArchived('asc');
    } else {
      // router.push('/login');
    }
  }, [user, sortingType]);

  // IsLoading hook
  useEffect(() => {
    isLoaded = false;
    if (!(user || loading)) {
    } else {
      if (!user?.name) {
        if (!isLoaded) {
          isLoaded = true;
        } else {
          isLoaded = false;
          // router.push('/login');
        }
      }
    }
  }, [user, loading]);

  const [todos, setTodos] = useState([]);
  const [todosArchived, setTodosArchived] = useState(todos);

  const fetchTodoElements = async (sortingType) => {
    const allTodos = [];
    db.collection('users')
      .doc(user.uid)
      .collection('todolist')
      .orderBy('orderId', sortingType)
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
    console.log('Success on fetching the todo list.');
  };

  const fetchTodoElementsArchived = async () => {
    const allTodos = [];
    db.collection('users')
      .doc(user.uid)
      .collection('todolist')
      .orderBy('date', 'asc')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((todo) => {
          let currentID = todo.id;
          let appObj = { ...todo.data(), ['id']: currentID };
          allTodos.push(appObj);
        });
        setTodosArchived(allTodos);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
    console.log('Success on fetching the archived todo list.');
  };

  const updateOrderId = async () => {
    try {
      await db
        .collection('users')
        .doc(user.uid)
        .update({
          latestOrderId: currentOrderId + 1,
        })
        .then(() => {
          setCurrentOrderId(currentOrderId + 1);
          console.log('Latest orderId updated.');
        });
    } catch (error) {
      console.log('Error on updating the latestOrderId: ' + error);
    }
  };

  const handleSortingType = async (newSortingType) => {
    try {
      await db
        .collection('users')
        .doc(user.uid)
        .update({
          sortingType: newSortingType,
        })
        .then(() => {
          setSortingType(newSortingType);
          console.log('Latest sorting type updated. Now fetch the list again.');
          fetchTodoElements(newSortingType);
        });
    } catch (error) {
      console.log('Error on updating the latestOrderId: ' + error);
    }
  };

  const addTodoElement = async (newTodo) => {
    try {
      await db
        .collection('users')
        .doc(user.uid)
        .collection('todolist')
        .doc(uuidv4())
        .set({ ...newTodo, orderId: currentOrderId + 1 })
        .then(() => {
          console.log(
            'New todo added with orderId: ',
            currentOrderId + 1,
            '. Now fetch the list again.'
          );
          updateOrderId();
          fetchTodoElements(sortingType);
        });
      console.log('Success. New todo added');
    } catch (error) {
      console.log('Error on adding todo element: ' + error);
    }
  };

  const deleteTodo = async (todo) => {
    try {
      await db
        .collection('users')
        .doc(user.uid)
        .collection('todolist')
        .doc(todo.id)
        .delete()
        .then(() => {
          console.log('Todo deleted.');
          fetchTodoElements(sortingType);
        });
      console.log('Success. Todo deleted.');
    } catch (error) {
      console.log('Error on deleting todo element: ' + error);
    }
  };

  const updateTodo = async (todo) => {
    console.log('updateTODO: ', JSON.stringify(todo));
    try {
      await db
        .collection('users')
        .doc(user.uid)
        .collection('todolist')
        .doc(todo.id)
        .update({
          content: todo.content,
          completed: todo.completed,
          archived: todo.archived,
          date: todo.date,
        })
        .then(() => {
          console.log('Todo updated. Now fetch the list again.', todo);
          fetchTodoElements(sortingType);
          fetchTodoElementsArchived('asc');
        });
    } catch (error) {
      console.log('Error on updating the todo element: ' + error);
    }
  };

  const handleWeekChange = (e) => {
    setCurrentWeekNo(e.target.value);
  };

  const handleYearChange = (e) => {
    console.log('Inside year change', e.target.value, thisYear);
    setCurrentYear(e.target.value);
    setCurrentWeekNo(e.target.value == thisYear ? thisWeek : 1);
  };

  return {
    handleYearChange,
    handleWeekChange,
    todos,
    setTodos,
    updateTodo,
    deleteTodo,
    addTodoElement,
    todosArchived,
    currentWeekNo,
    setCurrentWeekNo,
    currentYear,
    allWeeksFromYear,
    sortingType,
    handleSortingType,
    getWeekNumbers,
    getDateRangeOfWeek,
    isLoaded,
  };
};
