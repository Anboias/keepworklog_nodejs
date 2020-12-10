import Weekday from './Weekday';
// Worklog container
import getDateRangeOfWeek, {
  getWeekNumbers,
} from '../utils/getDateRangeOfWeek';

const Weeks = ({ currentWeekNo, year, todos }) => {
  let currentWeek = getDateRangeOfWeek(currentWeekNo, year);

  return (
    <section id="weeks">
      <div className="container">
        <Weekday day="Monday" todos={todos} currentWeek={currentWeek[0]} />
        <Weekday day="Tuesday" todos={todos} currentWeek={currentWeek[1]} />
        <Weekday day="Wednesday" todos={todos} currentWeek={currentWeek[2]} />
        <Weekday day="Thursday" todos={todos} currentWeek={currentWeek[3]} />
        <Weekday day="Friday" todos={todos} currentWeek={currentWeek[4]} />
        <Weekday day="Saturday" todos={todos} currentWeek={currentWeek[5]} />
        <Weekday day="Sunday" todos={todos} currentWeek={currentWeek[6]} />
      </div>
    </section>
  );
};

export default Weeks;
