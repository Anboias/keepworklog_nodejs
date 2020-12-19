import Weekday from './Weekday';
// Worklog container
import getDateRangeOfWeek, {
  getWeekNumbers,
} from '../utils/getDateRangeOfWeek';

const Weeks = ({ todosArchived, currentWeekNo, year, updateTodo }) => {
  let currentWeek = getDateRangeOfWeek(currentWeekNo, year);

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <section id="weeks">
      <div className="container">
        <div className="buttons">
          {/* hidden with display none */}
          <button onClick={null}>Show time completed</button>
          <button onClick={null}>Copy to clipboard</button>
        </div>
        <div className="weekdays">
          {days.map((day, index) => (
            <Weekday
              key={index}
              day={day}
              updateTodo={updateTodo}
              todosArchived={todosArchived}
              currentWeek={currentWeek[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Weeks;
