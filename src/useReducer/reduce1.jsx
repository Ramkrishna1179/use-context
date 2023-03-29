import React, { useReducer } from "react";
const initialvalue = 0;
function myfuncton(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(myfuncton, initialvalue);
  return (
    <>
      <p>{state}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
    </>
  );
}
export default Counter;
