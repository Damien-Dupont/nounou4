/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
// import React from "react";
import "./Month.scss";
import arrowRightBlue from "../assets/arrowRightBlue.svg";
import arrowLeftBlue from "../assets/arrowLeftBlue.svg";
import logo from "../assets/logow.png";
// import { useEffect } from "react";

function camelCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function MonthPage() {
  const now = new Date();

  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [longMonth, setLongMonth] = useState();
  const [daysOfMonth, setDaysOfMonth] = useState([]);

  // TODO: push des cases vides , autant que nécessaires pour ajuster le premier jour du mois

  const daysLabel = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  const handleChangeMonth = (e) => {
    console.log("e.target.alt", e.target.alt, currentMonth);
    e.preventDefault();
    if (e.target.alt === "arrowRight") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else if (e.target.alt === "arrowLeft") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };

  useEffect(() => {
    setLongMonth(
      camelCase(
        new Date(now.getFullYear(), currentMonth, 1).toLocaleDateString(
          "fr-FR",
          { month: "long" }
        )
      )
    );

    const daysInCurrentMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();
    console.log("monthLength", daysInCurrentMonth);
    const populateDaysOfMonth = () => {
      const daysTemp = [];
      for (let i = 1; i <= daysInCurrentMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const dayStr = date.toLocaleString("Fr-fr", { weekday: "long" });
        daysTemp.push({
          dayNumber: i,
          dayString: dayStr,
          care:
            dayStr !== "samedi" &&
            dayStr !== "dimanche" &&
            dayStr !== "mercredi",
        });
      }
      setDaysOfMonth(daysTemp);
      console.log("daysTemp", daysTemp);
    };
    populateDaysOfMonth();
  }, [currentMonth]);
  console.log("daysOfMonth", daysOfMonth);

  return (
    <div className="background">
      <div className="header">
        <img key={logo} className="header__logo" src={logo} alt="logo" />
        <div className="header__month">
          <img
            onClick={(e) => {
              handleChangeMonth(e);
            }}
            src={arrowLeftBlue}
            alt="arrowLeft"
          />
          {longMonth}
          <img
            onClick={(e) => {
              handleChangeMonth(e);
            }}
            src={arrowRightBlue}
            alt="arrowRight"
          />
        </div>
      </div>
      <div className="allframe">
        <div className="paper">
          <div className="days">
            {daysLabel.map((day) => (
              <div className="days__label">{day}</div>
            ))}
          </div>
          <div className="calendar">
            {/* {daysOfMonth.map((day) => (
              <div className={`calendar__care__${day.care}`}>{day.day}</div>
            ))} */}
            {/* <div className="paper-declare__calendar">
            <div className="paper-declare__calendar__lign">
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2">1</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3">2</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-4">3</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-5">4</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-6">5</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-7">6</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-8">7</p>
              </div>
            </div>
            <div className="paper-declare__calendar__lign">
              <div className="paper-declare__calendar__lign__day">
                <p className="text-9">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-1-0">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-1-1">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-1-2">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-1-3">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-1-4">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-1-5">29</p>
              </div>
            </div>
            <div className="paper-declare__calendar__lign">
              <div className="paper-declare__calendar__lign__day">
                <p className="text-1-6">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-1-7">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-1-8">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-1-9">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2-0">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2-1">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2-2">29</p>
              </div>
            </div>
            <div className="paper-declare__calendar__lign">
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2-3">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2-4">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2-5">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2-6">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2-7">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2-8">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-2-9">29</p>
              </div>
            </div>
            <div className="paper-declare__calendar__lign">
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3-0">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3-1">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3-2">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3-3">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3-4">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3-5">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3-6">29</p>
              </div>
            </div>
            <div className="paper-declare__calendar__lign">
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3-7">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3-8">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-3-9">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-4-0">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-4-1">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-4-2">29</p>
              </div>
              <div className="paper-declare__calendar__lign__day">
                <p className="text-4-3">29</p>
              </div>
            </div>
          </div> */}
            {/* <button type="submit" className="events-add-button">
            <p className="text-4-4">Ajouter un évènement</p>
          </button>
          <p className="text-4-5">Pas d’évènements ce mois-ci.</p> */}
            <div className="declare">
              <p className="declare__title">À déclarer ce mois-ci :</p>
              <div className="declare__element">
                <div className="declare__element__left">
                  <div className="declare__value">
                    <p className="declare__value">2,5 J</p>
                  </div>
                  <p className="text-5-1">Jours de congés acquis</p>
                </div>
                <div className="declare__element__left">
                  <div className="declare__value">
                    <p className="declare__value">4,00 €</p>
                  </div>
                  <p className="text-5-3">Salaire Horaire</p>
                </div>
                <div className="declare__element__left">
                  <div className="declare__value">
                    <p className="declare__value">0 J</p>
                  </div>
                  <p className="text-5-5">Heures complémentaires</p>
                </div>
                <div className="declare__element__left">
                  <div className="declare__value">
                    <p className="declare__value">10 J</p>
                  </div>
                  <p className="text-5-7">Jours mensualisés</p>
                </div>
                <div className="declare__element__left">
                  <div className="declare__value">
                    <p className="declare__value">101 h</p>
                  </div>
                  <p className="text-5-9">Heures normales</p>
                </div>
                <div className="declare__element__right__salary">
                  <p>Salaire Net Total:</p>
                  <p>361,78 €</p>
                </div>
                <div className="declare__element__right__short">
                  <div className="declare__value">
                    <p className="text-4-8">65,00 €</p>
                  </div>
                  <p className="text-4-9">Indemnités de repas</p>
                </div>
                <div className="declare__element__right__short">
                  <div className="declare__value">
                    <p className="text-6-0">33,90 €</p>
                  </div>
                  <p className="text-6-1">Indemnités entretien</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
