// Returns the ISO week of the date.
Date.prototype.getWeek = function (numOfdaysPastSinceLastMonday) {
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

const getDateRangeOfWeek = (weekNo, y) => {
  var day, numOfdaysPastSinceLastMonday, dayOne, dayTwo;
  let days = [];
  day = new Date('' + y + '');

  numOfdaysPastSinceLastMonday = day.getDay() - 1;
  day.setDate(day.getDate() - numOfdaysPastSinceLastMonday);
  day.setDate(
    day.getDate() + 7 * (weekNo - day.getWeek(numOfdaysPastSinceLastMonday))
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

export default getDateRangeOfWeek;
