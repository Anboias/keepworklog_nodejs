// ENTIRE ALGORITHM NEEDS CORRECTIONS. HARDCODED YEAR 2021

// Returns the ISO week of the date.
Date.prototype.getWeek = function () {
  var date = new Date(this.getTime());

  // console.log('date: ', date.getDay());

  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  let dayOffset = date.getDay() === 1 ? 3 : 3;
  date.setDate(date.getDate() + dayOffset - ((date.getDay() + 6) % 7));
  // if (date.getDay()) {
  //   c
  // }

  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // console.log('date2: ', date.getDay());
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

const getDateRangeOfWeek = (weekNo, y) => {
  var day, numOfdaysPastSinceLastMonday, dayOne, dayTwo;
  let days = [];
  day = new Date('' + y + '');

  numOfdaysPastSinceLastMonday = day.getDay() - 1;
  day.setDate(day.getDate() - numOfdaysPastSinceLastMonday);
  day.setDate(day.getDate() + 7 * (weekNo - day.getWeek()));
  day.setDate(day.getDate() - 1);
  // console.log('getDateRangeOfWeek: ', weekNo, y, day);

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

export const getWeekNumbers = () => {
  let year = 2022;
  let current = [];
  let index = 0;
  let indexOffset = 0;

  getWeekNumber();

  while (index < 52) {
    current[index + indexOffset] = getDateRangeOfWeek(index + 1, year);

    // if (parseInt(current[index + indexOffset][0].year) + 1 === year) {
    //   console.log(
    //     'WTFFFF: ',
    //     indexOffset,
    //     parseInt(current[index + indexOffset][0].year) + 1
    //   );

    //   // current = [];
    //   // indexOffset = -1;
    // } else if (parseInt(current[index + indexOffset][0].year) - 1 == year) {
    //   current.pop();
    //   break;
    // }
    index++;
  }
  return current;
};

export default getDateRangeOfWeek;
// console.log(getDateRangeOfWeek(49, 2020)); //12-21-2015 to 12-27-2015

const getWeekNumber = () => {
  console.log('Start getWeekNumber.');
  var d = new Date(Date.UTC('20201230'));

  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  console.log('The current ISO week number is ' + new Date().getWeekNumber());
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};
