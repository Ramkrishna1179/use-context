// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { useState } from 'react';

// function CircularProgress() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount((count + 1) % 101);
//   };

//   return (
//     <div style={{ width: '100px', height: '100px' }} onClick={handleClick} strokeWidth={10}>
//       <CircularProgressbar
//         value={count}
//         text={`${count}%`}
//         strokeWidth={10}
//         styles={buildStyles({
//           strokeLinecap: 'butt',
//           pathTransitionDuration: 0.5,
//           pathColor: '#3E98C7',
//           textColor: '#3E98C7',
//           trailColor: '#d6d6d6',
//           backgroundColor: '#3e98c780',
//         })}
        
//       />
//     </div>
//   );
// }


// export default CircularProgress




// import { useState } from 'react';
// import './slider1.css';

// function CircularProgress() {
//   const [count, setCount] = useState(0);
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setCount(count + 1);
//     setClicked(true);
//     setTimeout(() => {
//       setClicked(false);
//     }, 500);
//   };

//   return (
//     <svg viewBox="0 0 100 100">
//       <circle
//         id="circle"
//         cx="50"
//         cy="50"
//         r="40"
//         stroke={clicked ? 'red' : '#ccc'}
//         strokeWidth="10"
//         fill="transparent"
//         className={clicked ? 'clicked' : ''}
//         onClick={handleClick}
//       />
//       <text
//         id="count"
//         x="50"
//         y="55"
//         fontSize="30"
//         textAnchor="middle"
//         dominantBaseline="middle"
//         fill={clicked ? 'red' : '#000'}
//       >
//         {count}
//       </text>
//     </svg>
//   );
// }

// export default CircularProgress;

import React, { useState } from 'react';
import './slider.css'; // replace with your CSS file

function CircularProgress() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  

  const handleClick = () => {
    setCount(count + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  return (
    <div className="App">
      <svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke={animate ? 'red' : 'lightgrey'}
          strokeWidth="10"
          fill="transparent"
          onClick={handleClick}
        />
        <text x="50" y="60" textAnchor="middle" fill="black">
          {count}
        </text>
      </svg>
    </div>
  );
}

export default CircularProgress;


