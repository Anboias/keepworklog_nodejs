import Weekday from './Weekday';
// Worklog container
import getDateRangeOfWeek, {
  getWeekNumbers,
} from '../utils/getDateRangeOfWeek';

const Weeks = ({ todos, currentWeekNo, year, updateTodo }) => {
  let currentWeek = getDateRangeOfWeek(currentWeekNo, year);

  return (
    <section id="weeks">
      <div className="container">
        <Weekday
          day="Monday"
          updateTodo={updateTodo}
          todos={todos}
          currentWeek={currentWeek[0]}
        />
        <Weekday
          day="Tuesday"
          updateTodo={updateTodo}
          todos={todos}
          currentWeek={currentWeek[1]}
        />
        <Weekday
          day="Wednesday"
          updateTodo={updateTodo}
          todos={todos}
          currentWeek={currentWeek[2]}
        />
        <Weekday
          day="Thursday"
          updateTodo={updateTodo}
          todos={todos}
          currentWeek={currentWeek[3]}
        />
        <Weekday
          day="Friday"
          updateTodo={updateTodo}
          todos={todos}
          currentWeek={currentWeek[4]}
        />
        <Weekday
          day="Saturday"
          updateTodo={updateTodo}
          todos={todos}
          currentWeek={currentWeek[5]}
        />
        <Weekday
          day="Sunday"
          updateTodo={updateTodo}
          todos={todos}
          currentWeek={currentWeek[6]}
        />
      </div>
    </section>
  );
};

export default Weeks;
