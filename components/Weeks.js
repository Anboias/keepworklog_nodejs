import Weekday from './Weekday';
// Worklog container
import getDateRangeOfWeek, {
  getWeekNumbers,
} from '../utils/getDateRangeOfWeek';

const Weeks = ({ data, currentWeekNo, year }) => {
  let currentWeek = getDateRangeOfWeek(currentWeekNo, year);

  return (
    <section id="weeks">
      <div className="container">
        <Weekday day="Monday" currentWeek={currentWeek[0]} />
        <Weekday day="Tuesday" currentWeek={currentWeek[1]} />
        <Weekday day="Wednesday" currentWeek={currentWeek[2]} />
        <Weekday day="Thursday" currentWeek={currentWeek[3]} />
        <Weekday day="Friday" currentWeek={currentWeek[4]} />
        <Weekday day="Saturday" currentWeek={currentWeek[5]} />
        <Weekday day="Sunday" currentWeek={currentWeek[6]} />
      </div>
    </section>
  );
};

export default Weeks;
