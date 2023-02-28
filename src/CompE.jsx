import React, { useContext } from "react";
import { Value } from "./App";
const CompE = () => {
  const output = useContext(Value)
  return(
    <> 
    <h1><i>CompE This output is coming by UseContext Hook:-</i> {output}</h1>
    </>

  )
};

export default CompE;
