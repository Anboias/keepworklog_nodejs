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
    </section>
  );
};

export default Weeks;
