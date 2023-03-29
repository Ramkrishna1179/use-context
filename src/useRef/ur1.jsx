import React, { useState, useEffect, useRef } from "react";

export default function UR1() {
  const [count, setCount] = useState(0);
  let intervalRef;

  useEffect(() => {
    intervalRef = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(intervalRef);
  }, []);
  return (
    <div className="m-5">
      <p>Count: {count}</p>
      <button onClick={() => clearInterval(intervalRef)}>Stop</button>
    </div>
  );
};
function UR2() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      <br />
      <br />
      <UR3 />
    </div>
  );
}
export { UR2 };

const UR3 = () => {
  const [data, newData] = useState("");
  const val = useRef("5");
  const handleClick = () => {
    console.log(val);
    val.current.style.color = "orange";
    val.current.style.backgroundColor = "teal";
    val.current.style.textAlign = "center";
    val.current.focus();
  };

  return (
    <>
      <input
        ref={val}
        type="text"
        onChange={(e) => {
          newData(e.target.value);
        }}
        value={data}
      />
      -<button onClick={handleClick}>Click only here not anywhere</button>
    </>
  );
};
