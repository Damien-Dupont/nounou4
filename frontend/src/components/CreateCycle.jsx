/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
// import TimeSelector from "./TimeSelector";
import "react-datepicker/dist/react-datepicker.css";

const fiveDaysPerWeek = {
  1: { day: "lundi", start: null, end: null, duration: 0 },
  2: { day: "mardi", start: null, end: null, duration: 0 },
  3: { day: "mercredi", start: null, end: null, duration: 0 },
  4: { day: "jeudi", start: null, end: null, duration: 0 },
  5: { day: "vendredi", start: null, end: null, duration: 0 },
};
// const daysOfWeek = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];

export default function CreateCycle() {
  // durations
  const [weeksPerYear, setWeeksPerYear] = useState(0);
  const [weeksPerCycle, setWeeksPerCycle] = useState(0);
  // const [selectedCycle, setSelectedCycle] = useState(null);

  // cycle
  // const [selectedWeekOfCycle, setSelectedWeekOfCycle] = useState("");
  const [cycleSchedule, setCycleSchedule] = useState(null);
  console.log(cycleSchedule);
  // begining of the day
  //   const [mondayStart, setMondayStart] = useState(new Date());
  //   const [tuesdayStart, setTuesdayStart] = useState(new Date());
  //   const [wednesdayStart, setWednesdayStart] = useState(new Date());
  //   const [thursdayStart, setThursdayStart] = useState(new Date());
  //   const [fridayStart, setFridayStart] = useState(new Date());
  //   // end of the day
  //   const [mondayEnd, setMondayEnd] = useState(new Date());
  //   const [tuesdayEnd, setTuesdayEnd] = useState(new Date());
  //   const [wednesdayEnd, setWednesdayEnd] = useState(new Date());
  //   const [thursdayEnd, setThursdayEnd] = useState(new Date());
  //   const [fridayEnd, setFridayEnd] = useState(new Date());
  //   // duration of the day
  //   const [mondayDuration, setMondayDuration] = useState(0);
  //   const [tuesdayDuration, setTuesdayDuration] = useState(0);
  //   const [wednesdayDuration, setWednesdayDuration] = useState(0);
  //   const [thursdayDuration, setThursdayDuration] = useState(0);
  //   const [fridayDuration, setFridayDuration] = useState(0);
  //   // test
  // const [schedule, setSchedule] = useState([week]);

  // useEffect(() => {
  //   "parent";
  // }, [userFirstname, userLastname, userRole, userEmail]);

  useEffect(() => {
    setCycleSchedule(
      Array.from({ length: weeksPerCycle }).fill(fiveDaysPerWeek)
    );
  }, [weeksPerCycle]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // ici, vous pouvez utiliser les données du formulaire comme vous le souhaitez
  };
  const index = 0;
  const week = 1;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Formulaire de création d'un cycle</h2>

        <label>
          Nombre de semaine par an:
          <input
            id="weeksPerYear"
            name="weeksPerYear"
            placeholder="52"
            type="number"
            value={weeksPerYear}
            onChange={(event) => setWeeksPerYear(event.target.value)}
          />
        </label>
        <br />
        {weeksPerYear > 0 && (
          <label>
            Durée d'un cycle en semaines:
            <input
              id="weeksPerCycle"
              name="weeksPerCycle"
              placeholder="1"
              type="number"
              value={weeksPerCycle}
              onChange={(event) => setWeeksPerCycle(event.target.value)}
            />
          </label>
        )}
        <br />
        <input type="submit" value="Envoyer" />
      </form>
      {/* {weeksPerCycle !== null &&
        weeksPerCycle.map((week, index) => ( */}
      {/* <> */}
      <div>semaine {index + 1}</div>
      <ScheduleByWeek week={week} index={index} />
      {/* </>
        ))} */}
    </>
  );
}

function Checkbox(label, value, onChange) {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
}

function ScheduleByWeek(week, index) {
  // const handleSubmitWeek = (event) => {
  //   event.preventDefault();
  //   // ici, vous pouvez utiliser les données du formulaire comme vous le souhaitez
  // };
  // const handleDateChange = (event) => {
  //   event.preventDefault();
  //   // ici, vous pouvez utiliser les données du formulaire comme vous le souhaitez
  // };

  const [startDate, setStartDate] = useState(new Date());
  // const [monday, setMonday] = useState({
  //   checked: false,
  //   start: null,
  //   end: null,
  //   duration: 0,
  // });
  // const [checked, setChecked] = React.useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);
  const [checked, setChecked] = useState(false);
  const handleChangeCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div>semaine {index + 1}</div>
      <div>Jours travaillés</div>
      <br />
      <Checkbox label="lundi" value={checked} onChange={handleChangeCheckbox} />

      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          timeFormat="HH:mm"
          dateFormat="HH'h'mm"
          // dateFormat="dddd, DDD, ddd, d, dd MMMM yyyy à HH'h'mm"
        />
      </div>
      <div />
    </>
  );
}

// function ScheduleByCycle(index) {
//   // const { schedule } = propsSchedule;
//   // const { weeksPerCycle } = propsWeeksPerCycle;

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   // ici, vous pouvez utiliser les données du formulaire comme vous le souhaitez
//   // };

//   // const weekForm = Array.from({ length: weeksPerCycle }).fill(week);

//   // console.log("weekform", weekForm.length, weekForm);

//   // const weeekForm = [];
//   // for (let i = 0; i < weeksPerCycle; i++) {
//   //   weeekForm.push(week);
//   //   console.log(`FORloop semaine ${i + 1}`, weeekForm[i]);
//   // }
//   // for (let i = 0; i < weeksPerCycle; i++) {
//   //   weekForm.push(
//   //     <label>
//   //       <input
//   //         id="weeksPerYear"
//   //         name="weeksPerYear"
//   //         placeholder="52"
//   //         type="number"
//   //         value={weeksPerYear}
//   //         onChange={(event) => setWeeksPerYear(event.target.value)}
//   //       />
//   //     </label>
//   //   );
//   // }

//   return (
//     <div>
//       <div>---</div>
//       <div>weeksPerCycle:</div>
//       <div>{weeksPerCycle}</div>
//       <div>---</div>
//       <div>schedule:</div>
//       <div>{schedule}</div>
//       EOF
//     </div>
//   );
// }

// // <h2>Formulaire de création d'un cycle</h2>

// //       <label>
// //         Nombre de semaine par an:
// //         <input
// //           id="weeksPerYear"
// //           name="weeksPerYear"
// //           placeholder="52"
// //           type="number"
// //           value={weeksPerYear}
// //           onChange={(event) => setWeeksPerYear(event.target.value)}
// //         />
// //       </label>
