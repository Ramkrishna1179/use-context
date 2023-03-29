import React, { useContext } from "react";
import { Value } from "./App";
const CompD = () => {
  const { state, setState } = useContext(Value);
  const handleClick = () => {
    setState({
      name: "Krishna yadav",
      profession: "As u wish",
      designation: "Kuchh bhi chalega",
      ctc: "Bahut lagega",
    });
  };
  return (
    <>
      <ol className="text-start">
        <li>Name:- {state.name}</li>
        <li>Profession:- {state.profession}</li>
        <li>Designation:- {state.designation}</li>
        <li>
          CTC:- <strong> {state.ctc}</strong>
        </li>
        <br />
        <button onClick={handleClick}>Update data</button>
      </ol>
    </>
  );
};
export default CompD;
