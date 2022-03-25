import '../components/Assessment.css';

const Assessment = () => {
  return (
    <div className='assessment'>
      <div className='question'>Why do you want to be a JS developer?</div>
      <div className='answers'>
        <div className='answer active'>good question</div>
        <div className='answer correct'>good question</div>
        <div className='answer wrong'>good question</div>
        <div className='answer'>good question</div>
      </div>
    </div>
  );
};

export default Assessment;
