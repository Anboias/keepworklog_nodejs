import TodolistElement from './TodolistElement';

const Weekday = ({ todos, day, currentWeek, updateTodo }) => {
  let currentDate = currentWeek.year + currentWeek.month + currentWeek.day;
  // console.log('inside ', currentWeek);

  return (
    <div className="weekday">
      <p className="day">{day + ', ' + currentWeek.day}</p>
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
