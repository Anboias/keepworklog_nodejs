// Returns the ISO week of the date.
Date.prototype.getWeek = function () {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
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
  day.setDate(day.getDate() + 7 * (weekNo - day.getWeek()));
  day.setDate(day.getDate() - 1);

  for (var i = 0; i < 7; i++) {
    day.setDate(day.getDate() + 1);
    days.push(
      day.getMonth() + 1 + '-' + day.getDate() + '-' + day.getFullYear()
    );
  }
  return days;
};

export default getDateRangeOfWeek;

// console.log(getDateRangeOfWeek(49, 2020)); //12-21-2015 to 12-27-2015
