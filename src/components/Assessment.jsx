import { useEffect, useState } from 'react';
import '../components/Assessment.css';

const Assessment = ({
  data,
  setTimeOut,
  questionNumber,
  setQuestionNumber,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName('answer active');
  };
  return (
    <div className='assessment'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map((answer) => (
          <div
            className={setSelectedAnswer === answer ? className : 'answer'}
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
