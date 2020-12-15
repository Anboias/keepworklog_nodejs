import TodolistElement from './TodolistElement';
import data from '../data';

const Weekday = ({ todos, day, currentWeek, updateTodo }) => {
  let currentDate = currentWeek.year + currentWeek.month + currentWeek.day;
  // console.log('inside ', currentWeek);

  return (
    <div className="weekday">
      <h1>{day + ', ' + currentWeek.day}</h1>
      <i className="far fa-copy"></i>

      <ul className="weekday-list sortable">
        <>
          {todos
            .filter((all) => all.archived === true && all.date === currentDate)
            .map((todo, index) => {
              return (
                <TodolistElement
                  key={index}
                  todo={todo}
                  updateTodo={updateTodo}
                />
              );
            })}
        </>
      </ul>
    </div>
  );
};

export default Weekday;
