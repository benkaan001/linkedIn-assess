import { useEffect, useState } from 'react';
import './Timer.css';

const Timer = ({ setTimeOver, questionNumber }) => {
  const [timer, setTimer] = useState(126);

  useEffect(() => {
    if (timer === 0) return setTimeOver(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setTimeOver, timer]);

  useEffect(() => {
    setTimer(126);
  }, [questionNumber]);

  return <div className='timer'>{timer}</div>;
};

export default Timer;
