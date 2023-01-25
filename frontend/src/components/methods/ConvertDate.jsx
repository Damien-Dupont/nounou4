export default function ConvertDate(date) {
  const month = date.$M < 9 ? `0${date.$M + 1}` : date.$M + 1;
  const day = date.$D < 10 ? `0${date.$D}` : date.$D;
  console.log("ConvertDate: date:", `${date.$y}-${month}-${day}`);
  return `${date.$y}-${month}-${day}`;
}

export function DateFromString(date) {
  const dateArray = date.split("-");
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];
  return { dateArray, year, month, day };
}
