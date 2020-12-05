import React, { useState } from 'react';
import Weeks from './Weeks';
import getDateRangeOfWeek, {
  getWeekNumbers,
} from '../utils/getDateRangeOfWeek';

const Worklog = () => {
  const [weeks, setWeek] = useState(new Date());

  // const Week = weeks.map((Week) => Week);
  const handleWeekChange = (e) => {
    console.log(e.target.value.day);
    return 'wtfff';
    // return e.target.value.day;
  };

  let year = 2020;
  const allWeeksFromYear = getWeekNumbers(year);

  // const [value, onChange] = useState(new Date());

  // const thisWeek = getDateRangeOfWeek(52, 2020);

  return (
    <section id="worklog">
      <div className="container">
        <p>Worklog 2020</p>
        <span>
          <select>
            Week{' '}
            {allWeeksFromYear.map((week, index) => {
              return (
                <option value={index + 1}>
                  Week {String(index + 1).padStart(2, '0')} : {week[0].day}.
                  {week[0].month} - {week[week.length - 1].day}.
                  {week[week.length - 1].month}
                </option>
              );
            })}
          </select>
        </span>
        {/* <select
          id="allweeks"
          name="allweeks"
          onChange={(e) => handleWeekChange(e)}
        > */}
        {/* {thisWeek.map((currentWeek) => (
            <option value={currentWeek.date}>{currentWeek.day}</option>
          ))} */}
        {/* </select> */}
      </div>
    </section>
  );
};

export default Worklog;
