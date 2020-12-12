import TodolistElement from './TodolistElement';
import data from '../data';
import { useAuth } from '../firebase/useAuth';

const Weekday = ({ day, currentWeek }) => {
  let currentDate = currentWeek.year + currentWeek.month + currentWeek.day;
  // console.log('inside ', currentWeek);
  const { todos, setTodos } = useAuth();

  return (
    <div className="weekday">
      <h1>{day + ', ' + currentWeek.day}</h1>
      <i className="far fa-copy"></i>

      <ul className="weekday-list sortable">
        <>
          {todos
            .filter((all) => all.isDone === true && all.date === currentDate)
            .map((todo, index) => {
              return <TodolistElement key={index} todo={todo} />;
            })}
        </>
      </ul>
    </div>
  );
};

export default Weekday;
