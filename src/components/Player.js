import React from 'react';
import Icon from './Icon';
import Counter from './Counter';

function Player({index, id, name, score, handleScoreChange, handleRemovePlayer, isHighScore}) {
  return (
    <div className='player'>
        <div className='player-name'>
            <button className='remove-player' onClick={() => handleRemovePlayer(id)}>
                X
            </button>
            <Icon isHighScore={isHighScore} />
            {name}
        </div>
        <div className='player-score'>
            <Counter 
                score={score}
                index={index}
                id={id}
                handleScoreChange={handleScoreChange}
            />
        </div>
    </div>
  );
}
export default Player;
