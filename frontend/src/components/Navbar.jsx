/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../redux/formSlice";

import "./stylesheets/Navbar.scss";

import arrowRightBlue from "../assets/arrowRightBlue.svg";
import arrowLeftBlue from "../assets/arrowLeftBlue.svg";
import logo from "../assets/logow.png";

export default function Navbar() {
  const page = useSelector((state) => state.form.page);
  const headTitle = useSelector((state) => state.general.headTitle);
  const dispatch = useDispatch();
  console.log("headTitle", headTitle);

  return (
    <div className="header">
      <img key={logo} className="header__logo" src={logo} alt="logo" />
      <div className="header__month">
        <img
          onClick={() => {
            dispatch(setPage(-1));
          }}
          src={arrowLeftBlue}
          alt="arrowLeft"
          className={page < 2 ? "hidden" : "visible"}
        />
        {page === 0 ? "Contrats" : "Nouveau contrat"}
        {/* {headTitle && { headTitle }} */}
        <img
          onClick={() => {
            dispatch(setPage(1));
          }}
          src={arrowRightBlue}
          alt="arrowRight"
          className={page < 1 || page > 2 ? "hidden" : "visible"}
        />
      </div>
    </div>
  );
}
