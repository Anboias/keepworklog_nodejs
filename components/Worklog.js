import React, { useState } from 'react';
import getMonthName from '../utils/getMonthName';

const Worklog = ({
  currentWeekNo,
  currentYear,
  setCurrentWeekNo,
  getWeekNumbers,
  handleWeekChange,
  handleYearChange,
  allWeeksFromYear,
  getWeekNumber,
  year,
}) => {
  const years = [
    2020,
    2021,
    2022,
    2023,
    2024,
    2025,
    2026,
    2027,
    2028,
    2029,
    2030,
  ];

  return (
    <section id="worklog">
      <div className="container">
        <p>
          Worklog{' '}
          <select
            id="allyears"
            name="allyears"
            onChange={(e) => handleYearChange(e)}
          >
            {years.map((year) => {
              // week.length is used because there are arrays that are smaller than 7
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </p>
        <span>
          <select
            id="allweeks"
            name="allweeks"
            onChange={(e) => handleWeekChange(e)}
          >
            Week{' '}
            {allWeeksFromYear.map((week, index) => {
              // week.length is used because there are arrays that are smaller than 7
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
