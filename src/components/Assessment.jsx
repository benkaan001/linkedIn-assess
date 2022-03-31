import { useEffect, useState } from 'react';
import '../components/Assessment.css';
import useSound from 'use-sound';
import play from '../assets/play.mp3';
import correct from '../assets/correct.mp3';
import wrong from '../assets/wrong.mp3';

const Assessment = ({
  data,
  setTimeOver,
  questionNumber,
  setQuestionNumber,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');
  const [letTheGameBegin] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  // useEffect(() => {
  //   letTheGameBegin();
  // }, [letTheGameBegin]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName('answer active');
    delay(3000, () =>
      setClassName(answer.correct ? 'answer correct' : 'answer wrong')
    );
    delay(5000, () => {
      if (answer.correct) {
        correctAnswer();
        delay(8000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTimeOver(true);
        });
      }
    });
  };
  return (
    <div className='assessment'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map((answer) => (
          <div
            className={selectedAnswer === answer ? className : 'answer'}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessment;
