export default function ConvertDate(date) {
  const month = date.$M < 9 ? `0${date.$M + 1}` : date.$M + 1;
  const day = date.$D < 10 ? `0${date.$D}` : date.$D;
  return `${date.$y}-${month}-${day}`;
}

export function ConvertTime(date) {
  const hour = date.$H < 10 ? `0${date.$H}` : date.$H;
  const minute = date.$m < 10 ? `0${date.$m}` : date.$m;
  return `${hour}:${minute}:00`;
}
