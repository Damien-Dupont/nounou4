import React from "react";

import CreateContract from "../components/CreateContract";
import CreateCycle from "../components/CreateCycle";
import CreateParent from "../components/CreateParent";

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
  return (
    <>
      <HorizontalLine />
      <CreateParent />
      <HorizontalLine />
      <CreateContract />
      <HorizontalLine />
      <CreateCycle />
    </>
  );
}
