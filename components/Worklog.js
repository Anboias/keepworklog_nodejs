import React, { useState } from 'react';
import getMonthName from '../utils/getMonthName';

const Worklog = ({
  currentWeekNo,
  setCurrentWeekNo,
  getWeekNumbers,
  handleWeekChange,
  allWeeksFromYear,
  getWeekNumber,
  year,
}) => {
  return (
    <section id="worklog">
      <div className="container">
        <p>Worklog 2021</p>
        <span>
          <select
            id="allweeks"
            name="allweeks"
            onChange={(e) => handleWeekChange(e)}
          >
            Week{' '}
            {allWeeksFromYear.map((week, index) => {
              return (
                <option key={index} value={index + 1}>
                  Week {String(index + 1).padStart(2, '0')} :{' '}
                  {week[0].day + ' ' + getMonthName(week[0].month)} -{' '}
                  {week[week.length - 1].day +
                    ' ' +
                    getMonthName(week[week.length - 1].month)}
                </option>
              );
            })}
          </select>
        </span>
      </div>
    </section>
  );
};

export default Worklog;
