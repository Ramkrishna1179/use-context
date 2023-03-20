import React from "react";
import CompB from "./CompB";
const CompA = (props) => {
  return (
    <>
      <CompB data={props.data} />
    </>
  );
};
export default CompA;
