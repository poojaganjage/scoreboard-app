import React from 'react';

function Stats({players}) {
  const totalPlayers = players.length;
  const totalPoints = players.reduce((acc, curr) => {
    return acc + curr.score;
  }, 0);
  return (
    <table className='stats'>
    <tbody>
        <tr>
            <td>Players: {totalPlayers}</td>
        </tr>
        <tr>
            <td>Total Points: {totalPoints}</td>
        </tr>
    </tbody>
    </table>
  );
}
export default Stats;
