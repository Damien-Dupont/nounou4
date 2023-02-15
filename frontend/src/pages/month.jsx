/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Month.scss";
import React, { useState, useEffect } from "react";
// import React from "react";
import arrowRightBlue from "../assets/arrowRightBlue.svg";
import arrowLeftBlue from "../assets/arrowLeftBlue.svg";
import logo from "../assets/logow.png";
// import { useEffect } from "react";

function camelCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Month() {
  const now = new Date();

  const [daysOfMonth, setDaysOfMonth] = useState([]);
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [longMonth, setLongMonth] = useState();

  console.log("daysOfMonth", daysOfMonth);

  // TODO: push des cases vides , autant que nécessaires pour ajuster le premier jour du mois

  const populateDaysOfMonth = () => {
    const daysInCurrentMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();
    const daysTemp = [];
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const dayStr = date.toLocaleString("Fr-fr", { weekday: "long" });
      daysTemp.push({
        dayNumber: i,
        dayString: dayStr,
        care:
          dayStr !== "samedi" && dayStr !== "dimanche" && dayStr !== "mercredi",
      });
    }
    setDaysOfMonth(daysTemp);
  };

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
    populateDaysOfMonth();
  }, [currentMonth]);

  const heuresNormales = 1;
  const joursMensualises = 2;
  const heuresComplementaires = 3;
  const salaireHoraire = 4;
  const joursConges = 5;

  const salaireNet = 6;
  const entretien = 7;
  const repas = 8;
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
          {/* <div className="calendar">
            {daysOfMonth.map((day) => (
              <div className={`calendar__care__${day.care}`}>{day.day}</div>
            ))}
            <div className="paper-declare__calendar">
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
            </div>
          </div> */}
          <div className="paper__events">
            <p className="text-4-5">Pas d’évènements ce mois-ci.</p>
            <button type="submit" className="events-add-button">
              Ajouter un évènement
            </button>
          </div>
          <div className="declare">
            <p className="declare__title">À déclarer ce mois-ci :</p>
            <div className="declare__hours left">
              <p>Heures normales</p>
              <span className="declare__hours value">{heuresNormales} h</span>
            </div>
            <div className="declare__daysPerMonth left">
              <p>Jours mensualisés</p>
              <span className="declare__daysPerMonth value">
                {joursMensualises} J
              </span>
            </div>
            <div className="declare__overhours left">
              <p>Heures complémentaires</p>
              <span className="declare__overhours value">
                {heuresComplementaires} h
              </span>
            </div>
            <div className="declare__priceHour left">
              <p>Salaire Horaire</p>
              <span className="declare__priceHour value">
                {salaireHoraire} €
              </span>
            </div>
            <div className="declare__daysoff left">
              <p>Jours de congés acquis</p>
              <span className="declare__daysoff value">{joursConges} J</span>
            </div>

            <div className="declare__salary total">
              <p>Salaire Net Total:</p>
              <span className="declare__salary total">{salaireNet} €</span>
            </div>
            <div className="declare__household right">
              Indemnités entretien
              <span className="declare__household value">{entretien} €</span>
            </div>
            <div className="declare__meal right">
              Indemnités de repas
              <span className="declare__meal value">{repas} €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
