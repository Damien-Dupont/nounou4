export function ConvertDate(date) {
  const month = date.$M + 1;

  // Generate yyyy-mm-dd date string
  return `${date.$y}-${month}-${date.$D}`;
}

export function DateFromString(date) {
  const dateArray = date.split("-");
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];
  return { dateArray, year, month, day };
}
