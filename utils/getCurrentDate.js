export function getCurrentDate(separator = '') {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1; // getMonth starts from 0
  let year = newDate.getFullYear();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();

  return `${year}${separator}${padLeft(month)}${separator}${padLeft(
    date
  )}${separator}${padLeft(hour)}${separator}${padLeft(
    minute
  )}${separator}${padLeft(second)}`;
}

const padLeft = (num = Integer) => {
  return num < 10 ? `0${num}` : num;
};
