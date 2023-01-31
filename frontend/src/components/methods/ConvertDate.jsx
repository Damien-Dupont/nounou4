export default function ConvertDate(date) {
  const month = date.$M < 9 ? `0${date.$M + 1}` : date.$M + 1;
  const day = date.$D < 10 ? `0${date.$D}` : date.$D;
  console.log("ConvertDate: date:", `${date.$y}-${month}-${day}`);
  return `${date.$y}-${month}-${day}`;
}

export function ConvertTime(date) {
  const hour = date.$H < 10 ? `0${date.$H}` : date.$H;
  const minute = date.$m < 10 ? `0${date.$m}` : date.$m;
  console.log("ConvertHour: heure:", `${hour}:${minute}`);
  return `${hour}:${minute}:00`;
}

// function DateFromString(date) {
//   const dateArray = date.split("-");
//   const year = dateArray[0];
//   const month = dateArray[1];
//   const day = dateArray[2];
//   return { dateArray, year, month, day };
// }

// export { ConvertDate, ConvertTime };
