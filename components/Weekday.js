import TodolistElement from './TodolistElement';

const Weekday = ({ todosArchived, day, currentWeek, updateTodo }) => {
  let currentDate = currentWeek.year + currentWeek.month + currentWeek.day;
  // console.log('inside ', currentWeek);

  return (
    <div className="weekday">
      <p className="day">{day + ', ' + currentWeek.day}</p>
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
