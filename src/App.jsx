import { useEffect, useMemo, useState } from 'react';
import './app.css';
import Assessment from './components/Assessment';
import Timer from './components/Timer';
import data from './data';
import StartAssess from './components/StartAssess';
import gameOn from '../src/assets/gameOn.png';

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOver, setTimeOver] = useState(false);
  const [winning, setWinning] = useState('nothing');

  const prizePyramid = useMemo(
    () =>
      [
        { id: 1, amount: '⭐️' },
        { id: 2, amount: '⭐️⭐️' },
        { id: 3, amount: '⭐️⭐️⭐️' },
        { id: 4, amount: '⭐️⭐️⭐️⭐️' },
        { id: 5, amount: '⭐️⭐️⭐️⭐️⭐️' },
        { id: 6, amount: '🎖' },
        { id: 7, amount: '🎖🎖' },
        { id: 8, amount: '🎖🎖🎖' },
        { id: 9, amount: '🎖🎖🎖🎖' },
        { id: 10, amount: '🎖🎖🎖🎖🎖' },
        { id: 11, amount: '🏆' },
        { id: 12, amount: '🏆🏆' },
        { id: 13, amount: '🏆🏆🏆' },
        { id: 14, amount: '🏆🏆🏆🏆' },
        { id: 15, amount: '🏆🏆🏆🏆🏆' },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setWinning(
        prizePyramid.find((prize) => prize.id === questionNumber - 1).amount
      );
  }, [questionNumber, prizePyramid]);

  return (
    <div className='App'>
      {userName ? (
        <>
          <div className='main'>
            {timeOver ? (
              questionNumber - 1 == data.length ? (
                <div className='winner'>
                  <div> Congratulations! You did it!!! </div>You earned:{' '}
                  {winning}
                </div>
              ) : (
                <div className='winner'>You earned: {winning}</div>
                // <div className='earned'> You earned: {winning}</div>
              )
            ) : (
              <>
                <div className='top'>
                  <Timer
                    setTimeOver={setTimeOver}
                    questionNumber={questionNumber}
                  />
                </div>

                <div className='bottom'>
                  <Assessment
                    data={data}
                    setTimeOver={setTimeOver}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className='pyramid'>
            <div className='logoWrapper'>
              <div className='logo'>
                <img src={gameOn} alt='Game On Logo' />
              </div>
            </div>
            <ul className='prizeList'>
              {prizePyramid.map((prize) => (
                <li
                  key={prize.id}
                  className={
                    questionNumber === prize.id
                      ? 'prizeListItem active'
                      : 'prizeListItem'
                  }
                >
                  <span className='prizeListItemNumber'> {prize.id} </span>
                  <span className='prizeListItemAmount'> {prize.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <StartAssess setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
