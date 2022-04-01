import { useEffect, useRef } from 'react';
import '../components/StartAssess.css';
import wait from '../assets/wait.mp3';
import useSound from 'use-sound';

const StartAssess = ({ setUserName }) => {
  const inputRef = useRef();

  const [waitUser, { stop }] = useSound(wait);
  useEffect(() => {
    waitUser();
  }, [waitUser]);

  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
    stop();
  };

  return (
    <div className='startWrapper'>
      <div className='start'>
        <input placeholder='enter your name' className='input' ref={inputRef} />
        <button className='btn' onClick={handleClick}>
          Let's Go!
        </button>
      </div>
    </div>
  );
};

export default StartAssess;
