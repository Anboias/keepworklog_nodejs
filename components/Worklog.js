import React, { useState } from 'react';
import Weeks from './Weeks';
import WeeksOf2021 from '../data/weeksOf2021';
import Calendar from 'react-calendar';
import getDateRangeOfWeek from '../utils/getDateRangeOfWeek';

const Worklog = () => {
  // const [weeks2021, setWeek] = useState(WeeksOf2021);

  // const Week = weeks.map((Week) => Week);
  // const handleWeekChange = (e) => console.log(week[e.target.value]);

  const [value, onChange] = useState(new Date());

  return (
    <section id="worklog">
      <div className="container">
        <p>Worklog 2021</p>
        <span>{JSON.stringify(getDateRangeOfWeek(49, 2020))}</span>
        {/* (weekNumber, date, event) => alert('Clicked week: ', weekNumber, 'that starts on: ', date) */}
        {/* 
        <Calendar
          onChange={onChange}
          value={value}
          calendarType="Arabic"
          onClickWeekNumber={(2, '01012020', null)}
        /> */}
        {/* <select
          id="allweeks"
          name="allweeks"
          onChange={(e) => handleWeekChange(e)}
        >
          {Week.map((week, key) => (
            <option value={key}>{week}</option>
          ))}
        </select> */}
      </div>
    </section>
  );
};

export default Worklog;
