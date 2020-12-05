import React, { useState } from 'react';

const Worklog = ({
  currentWeekNo,
  setCurrentWeekNo,
  getWeekNumbers,
  handleWeekChange,
  allWeeksFromYear,
  year,
}) => {
  return (
    <section id="worklog">
      <div className="container">
        <p>Worklog {year}</p>
        <span>
          <select
            id="allweeks"
            name="allweeks"
            onChange={(e) => handleWeekChange(e)}
          >
            Week{' '}
            {allWeeksFromYear.map((week, index) => {
              return (
                <option value={index + 1}>
                  Week {String(index + 1).padStart(2, '0')} : {week[0].day}.
                  {week[0].month}.{week[0].year} - {week[week.length - 1].day}.
                  {week[week.length - 1].month}.{week[week.length - 1].year}
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
