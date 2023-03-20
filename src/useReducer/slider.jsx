import React, { useState } from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import "./slider.css";

export default function Slider() {
  const [step, setStep] = useState(0);
  // const [count, setCount] = useState(0);
  // Progress from 0 to 100
  var progress = step > 0 ? step / 1 : 0;
  // Status from "Stopped" to "Done"
  var percentage = 100 * progress;
  // /var status = step > 0 ? (step < 1 ? "In Progress" : "Done") : "Stopped"
  const handleNext = (event) => {
    // debugger
    // event.target.style.stroke='red';
    //  window.location.reload();
    setStep(step + 1);
    // /event.target.style.stroke='none';
  };
  const handlePrevious = () => {
    debugger;
    // event.target.style.strokeDashoffset="1px"
    setStep(step - 1);
  };
  return (
    <div className="app">
      <div className="progress-container m-5" onClick={handleNext}>
        <CircularProgressbar value={percentage} text={`${step}`} />
      </div>
      <div className="action-container">
        <button onClick={handlePrevious} disabled={step === 0}>
          Previous
        </button>
      </div>
    </div>
  );
};

// <h1>Step {step}</h1>
// <h2>Status: {status}</h2>
