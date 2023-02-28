import React, { useState, useEffect, useRef } from 'react';

export default function UR1() {
  const [count, setCount] = useState(0);
  let intervalRef;

  useEffect(() => {
    intervalRef = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div>
    <p>Count: {count}</p>
    <button onClick={() => clearInterval(intervalRef)}>Stop</button>
    </div>
    );
  }

 function UR2() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
}
export {UR2}

