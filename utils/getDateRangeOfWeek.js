// Returns the ISO week of the date.
Date.prototype.getWeekPrototype = function (numOfdaysPastSinceLastMonday) {
  numOfdaysPastSinceLastMonday = Math.abs(numOfdaysPastSinceLastMonday);
  var date = new Date(this.getTime());

  date.setHours(0, 0, 0, 0);
  date.setDate(
    date.getDate() + numOfdaysPastSinceLastMonday - ((date.getDay() + 6) % 7)
  );

  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);

  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
};

/**
 * Returns the week number for this date.  dowOffset is the day of week the week
 * "starts" on for your locale - it can be from 0 to 6. If dowOffset is 1 (Monday),
 * the week returned is the ISO 8601 week number.
 * @param int dowOffset
 * @return int
 */
Date.prototype.getWeekNumberPrototype = function (dowOffset) {
  /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */

  // dowOffset = typeof dowOffset == 'int' ? dowOffset : 0; //default dowOffset to zero
  dowOffset = 1;
  var newYear = new Date(this.getFullYear(), 0, 1);
  var day = newYear.getDay() - dowOffset; //the day of week the year begins on
  day = day >= 0 ? day : day + 7;
  var daynum =
    Math.floor(
      (this.getTime() -
        newYear.getTime() -
        (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) /
        86400000
    ) + 1;
  var weeknum;
  //if the year starts before the middle of a week
  if (day < 4) {
    weeknum = Math.floor((daynum + day - 1) / 7) + 1;
    // Removed this entire section because on W53 of 2020 it returned a ReferenceError
    if (weeknum > 52) {
      // nYear = new Date(this.getFullYear() + 1, 0, 1);
      // nday = nYear.getDay() - dowOffset;
      // nday = nday >= 0 ? nday : nday + 7;
      /*if the next year starts before the middle of
                the week, it is week #1 of that year*/
      // weeknum = nday < 4 ? 1 : 53;
    }
  } else {
    weeknum = Math.floor((daynum + day - 1) / 7);
  }
  return weeknum;
};

// // OLD - found bug on week 51 in 2020 - it returned 52
// Date.prototype.getWeekNumberPrototype = function () {
//   //define a date object variable that will take the current system date
//   let todaydate = new Date();

//   //find the year of the current date
//   var oneJan2 = new Date(todaydate.getFullYear(), 0, 1);

//   // calculating number of days in given year before a given date
//   var numberOfDays = Math.floor((todaydate - oneJan2) / (24 * 60 * 60 * 1000));

//   // adding 1 since to current date and returns value starting from 0
//   var result = Math.ceil((todaydate.getDay() + 1 + numberOfDays) / 7);
//   console.log('WEEK NO NEW: ', result);

//   var onejan = new Date(this.getFullYear(), 0, 1);

//   console.log(
//     'WEKK NO OLD: ',
//     Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7)
//   );
//   return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
// };

const getDateRangeOfWeek = (weekNo, y) => {
  var day, numOfdaysPastSinceLastMonday, dayOne, dayTwo;
  let days = [];
  day = new Date('' + y + '');

  numOfdaysPastSinceLastMonday = day.getDay() - 1;
  day.setDate(day.getDate() - numOfdaysPastSinceLastMonday);
  day.setDate(
    day.getDate() +
      7 * (weekNo - day.getWeekPrototype(numOfdaysPastSinceLastMonday))
  );
  day.setDate(day.getDate() - 1);

  for (var i = 0; i < 7; i++) {
    day.setDate(day.getDate() + 1);
    days.push({
      day: String(day.getDate()).padStart(2, '0'),
      month: String(day.getMonth() + 1).padStart(2, '0'),
      year: day.getFullYear(),
    });
  }

  return days;
};

export const getWeekNumbers = (year) => {
  // Test with 1996, 2002, 1997, 2015, 1999, 2000, 2023
  // let year = 2023;
  let current = [];
  let index = 0;
  let indexOffset = 0;

  // Loop for the maximum number of weeks, but break if only 52 found
  while (index <= 53) {
    current[index - indexOffset] = getDateRangeOfWeek(index + 1, year);

    // If Thursday(index 3) belongs to this year, then so is the week
    // If not, find if it belongs to previous or next year and act accordingly
    if (parseInt(current[index - indexOffset][3].year) === year - 1) {
      indexOffset = 1;
    } else if (parseInt(current[index - indexOffset][3].year) === year + 1) {
      current.pop();
      break;
    }
    index++;
  }
  return current;
};

export const getWeekNumber = () => {
  var today = new Date();
  var weekNumber = today.getWeekNumberPrototype();
  return weekNumber;
};

export default getDateRangeOfWeek;
