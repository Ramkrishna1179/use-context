import React, { useReducer } from "react";

function myFunction(value, action) {
  switch (action.type) {
    case "name": {
      return { name: "krishna yadav",age: value.age,profession: "front-End Developer"};
    }
    case "profession": {
      return { name: "krishna yadav",age: value.age,profession: "front-End Developer"};
    }
    case "age": {
      return {name: "krishna yadav", age: value.age + 1,profession: "front-End Developer"};
    }
  }
}

const USR = () => {
  const [state, dispatch] = useReducer(myFunction, {
    name: "Ram yadav",
    profession: "software Engineer",
    age: 24,
  });

  return (
    <>
      <div>
      <h1>{state.name}</h1>
      <h2>{state.age}</h2>
      <h3>{state.profession}</h3>
        <button onClick={() => dispatch({ type: "name" })}>Change_name
        </button>-
        <button onClick={() => dispatch({ type: "profession" })}>Change_profession
        </button>-
        <button onClick={() => dispatch({ type: "age" })}>Change_age
        </button>
        <br /><br /><br />
      </div>
    </>
  );
};

export { USR };
