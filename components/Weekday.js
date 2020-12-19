import TodolistElement from './TodolistElement';
import getMonthName from '../utils/getMonthName';

const Weekday = ({ todosArchived, day, currentWeek, updateTodo }) => {
  let currentDate = currentWeek.year + currentWeek.month + currentWeek.day;

  return (
    <div className="weekday">
      <p className="day">
        {day + ', ' + currentWeek.day + ' ' + getMonthName(currentWeek.month)}
      </p>
      <i className="far fa-copy"></i>

      <ul className="weekday-list sortable">
        <>
          {todosArchived
            .filter(
              (all) =>
                all.archived === true &&
                all.date.substring(0, 8) === currentDate
            )
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
