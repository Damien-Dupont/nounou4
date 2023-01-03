function YearSelect() {
  const years = [];
  const today = new Date();
  const thisYear = today.getFullYear();
  for (let i = thisYear - 10; i <= thisYear; i += 1) {
    years.push(i);
  }
  return (
    <optgroup>
      {years.map((year) => (
        <option value={year}>{year}</option>
      ))}
    </optgroup>
  );
}

function MonthSelect() {
  const months = [];
  const monthNames = [
    "--sélectionnez un mois",
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  for (let i = 0; i <= 12; i += 1) {
    months.push(i + 1);
  }
  return (
    <optgroup>
      {months.map((month) => (
        <option value={month}>{monthNames[month]}</option>
      ))}
    </optgroup>
  );
}

function DaySelect() {
  const days = [];
  for (let i = 0; i <= days.length; i += 1) {
    if (i === 0) {
      days.push("--sélectionnez un jour");
    } else {
      days.push(i);
    }
  }
  return (
    <optgroup>
      {days.map((day) => (
        <option value={day}>{day}</option>
      ))}
    </optgroup>
  );
}

export { YearSelect, MonthSelect, DaySelect };
