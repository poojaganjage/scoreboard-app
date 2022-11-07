import React from 'react';

function Counter({score, index, id, handleScoreChange}) {
  return (
    <div className='score'>
      <button className='score-button decrement' onClick={() => handleScoreChange(id, index, -1)}>-</button>
      <div className='score-result'>{score}</div>
      <button className='score-button increment' onClick={() => handleScoreChange(id, index, 1)}>+</button>
    </div>
  );
}
export default Counter;
