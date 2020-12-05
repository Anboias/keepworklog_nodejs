import Weekday from './Weekday';
// Worklog container
import getDateRangeOfWeek, {
  getWeekNumbers,
} from '../utils/getDateRangeOfWeek';

const Weeks = ({ data, currentWeekNo, year }) => (
  <section id="weeks">
    <div className="container">
      <h1>
        {currentWeekNo} --{' '}
        {JSON.stringify(getDateRangeOfWeek(currentWeekNo, year))}
      </h1>
      <Weekday day="Monday, 23" data={data} />

      <Weekday day="Tuesday, 24" data={data} />

      <Weekday day="Wednesday, 25" data={data} />

      <Weekday day="Thursday, 26" data={data} />

      <Weekday day="Friday, 27" data={data} />

      <Weekday day="Saturday, 28" data={data} />

      <Weekday day="Sunday, 29" data={data} />
    </div>
  </section>
);

export default Weeks;
