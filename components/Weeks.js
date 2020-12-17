import Weekday from './Weekday';
// Worklog container
import getDateRangeOfWeek, {
  getWeekNumbers,
} from '../utils/getDateRangeOfWeek';

const Weeks = ({ todosArchived, currentWeekNo, year, updateTodo }) => {
  let currentWeek = getDateRangeOfWeek(currentWeekNo, year);

  return (
    <section id="weeks">
      <div className="container">
        <Weekday
          day="Monday"
          updateTodo={updateTodo}
          todosArchived={todosArchived}
          currentWeek={currentWeek[0]}
        />
        <Weekday
          day="Tuesday"
          updateTodo={updateTodo}
          todosArchived={todosArchived}
          currentWeek={currentWeek[1]}
        />
        <Weekday
          day="Wednesday"
          updateTodo={updateTodo}
          todosArchived={todosArchived}
          currentWeek={currentWeek[2]}
        />
        <Weekday
          day="Thursday"
          updateTodo={updateTodo}
          todosArchived={todosArchived}
          currentWeek={currentWeek[3]}
        />
        <Weekday
          day="Friday"
          updateTodo={updateTodo}
          todosArchived={todosArchived}
          currentWeek={currentWeek[4]}
        />
        <Weekday
          day="Saturday"
          updateTodo={updateTodo}
          todosArchived={todosArchived}
          currentWeek={currentWeek[5]}
        />
        <Weekday
          day="Sunday"
          updateTodo={updateTodo}
          todosArchived={todosArchived}
          currentWeek={currentWeek[6]}
        />
      </div>
    </section>
  );
};

export default Weeks;
