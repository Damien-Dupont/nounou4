import React, { useState } from "react";

// import CreateContract from "../components/CreateContract";
// import CreateCycle from "../components/CreateCycle";
import CreateParent from "../components/CreateParent";
// import CreateKid from "../components/CreateKid";
import CreateContract from "../components/CreateContract";

import "./Home.scss";

function HorizontalLine() {
  return (
    <>
      <br />
      <hr style={{ color: "black", backgroundColor: "black", height: 1 }} />
      <br />
    </>
  );
}

export default function Home() {
  const [isOpenParent, setIsOpenParent] = useState(false);
  const [isOpenKid, setIsOpenKid] = useState(false);
  const [isOpenContract, setIsOpenContract] = useState(false);
  // const [isOpenThree, setIsOpenThree] = useState(false);
  // const [isOpenFour, setIsOpenFour] = useState(false);

  const toggleKid = () => {
    setIsOpenKid(!isOpenKid);
  };
  const toggleParent = () => {
    setIsOpenParent(!isOpenParent);
  };
  const toggleContract = () => {
    setIsOpenContract(!isOpenContract);
  };
  // const toggleFour = () => {
  //   setIsOpenFour(!isOpenFour);
  // };
  return (
    <>
      <HorizontalLine />

      <div className={isOpenKid ? "form__open" : "form"}>
        <button type="button" onClick={toggleKid}>
          {isOpenKid ? "Close Kid Form" : "Open Kid Form"}
        </button>
        <div className="form__content">
          <br />
          {/* <CreateKid /> */}
        </div>
      </div>

      <HorizontalLine />

      <div className={isOpenParent ? "form__open" : "form"}>
        <button type="button" onClick={toggleParent}>
          {isOpenParent ? "Close Parent Form" : "Open Parent Form"}
        </button>
        <div className="form__content">
          <br />
          <CreateParent />
        </div>
      </div>

      <HorizontalLine />

      <div className={isOpenContract ? "form__open" : "form"}>
        <button type="button" onClick={toggleContract}>
          {isOpenContract ? "Close Contract Form" : "Open Contract Form"}
        </button>
        <div className="form__content">
          <br />
          <CreateContract />
        </div>
      </div>

      <HorizontalLine />
      {/* <CreateCycle /> */}
    </>
  );
}
