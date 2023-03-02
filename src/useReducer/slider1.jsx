import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

function CircularProgress() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count + 1) % 101);
  };

  return (
    <div style={{ width: '100px', height: '100px' }} onClick={handleClick} strokeWidth={10}>
      <CircularProgressbar
        value={count}
        text={`${count}%`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathTransitionDuration: 0.5,
          pathColor: '#3E98C7',
          textColor: '#3E98C7',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c780',
        })}
        
      />
    </div>
  );
}


export default CircularProgress