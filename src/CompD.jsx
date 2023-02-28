import React from "react";
import { Value } from "./App";

const CompD = ()=>{

  return(
    <>
     <Value.Consumer> 
     {(val)=>{
     return <h1> <em>CompE This output is coming by Context-API :-</em> CompD :-{val}</h1>
     }}
       
     </Value.Consumer>  
    </>
  )
};
export default CompD