import TodolistElement from './TodolistElement';
import data from '../data';

const Weekday = ({ day, currentWeek }) => {
  let currentDate = currentWeek.year + currentWeek.month + currentWeek.day;
  console.log('inside ', currentWeek);

  return (
    <div className="weekday">
      <h1>{day + ', ' + currentWeek.day}</h1>
      <i className="far fa-copy"></i>

      <ul className="weekday-list sortable">
        <>
          {data
            .filter((all) => all.status === 'done' && all.date === currentDate)
            .map((todo) => {
              return <TodolistElement todo={todo} />;
            })}
        </>
      </ul>
    </div>
  );
};

export default Weekday;
