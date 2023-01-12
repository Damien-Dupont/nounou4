export default function ConvertDate(date) {
  console.log("convertDate IN", date);
  const month = date.$M + 1;
  console.log("formatted date", `${date.$y}`);
  console.log("formatted date", `${month}`);
  console.log("formatted date", `${date.$D}`);
  console.log("convertDate OUT", `${date.$y}-${month}-${date.$D}`);
  // Generate yyyy-mm-dd date string
  return `${date.$y}-${month}-${date.$D}`;
}
