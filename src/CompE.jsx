import React, { useContext } from "react";
import { Value } from "./App";
const CompE = () => {
  const {state,setState} = useContext(Value);
  return (
    <>
      <ul className="text-start">
        <li>{state.name}</li>
        <li>{state.profession}</li>
        <li>{state.designation}</li>
        <li><strong>{state.ctc}</strong></li>
      </ul>
    </>
  );
};
export default CompE;
