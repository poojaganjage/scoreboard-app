import {useState} from 'react';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import './App.css';

function App() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: 'Pooja',
      score: 0
    },
    {
      id: 2,
      name: 'Atish',
      score: 0
    },
    {
      id: 3,
      name: 'Purnima',
      score: 0
    }
  ]);
  let [prevPlayerId, setPrevPlayerId] = useState(3);
  console.log(players);

  // add method.
  const handleAddPlayer = (value) => {
    console.log(value);
    console.log(players);

    // setPlayers((prevState) => {
    //   return [
    //       ...prevState, {
    //       name: value,
    //       score: 0,
    //       id: setPrevPlayerId(prevPlayerId += 1)
    //     }
    //   ]
    // });

    setPlayers([
      ...players, {
        name: value,
        score: 0,
        id: setPrevPlayerId(prevPlayerId += 1)
      }
    ]);
  }

  // remove method.
  const handleRemovePlayer = (id) => {
    setPlayers((prevState) => (
      [...prevState.filter((person) => person.id !== id)]
    ));
  }

  // scorechange method.
  const handleScoreChange = (id, index, delta) => {
    console.log(index);
    const newState = players.map((player) => {
      if (player.id === id) {
        return {...player, score: player.score += delta};
      }
      return player;
    });
    setPlayers(newState);

    // setPlayers({
    //   ...players, score: players[index].score += delta // It updates the value but it returns an object only.
    // });
  }

  // getHighScore method.
  const getHighScore = () => {
    const scores = players.map((player) => player.score);
    const highScore = Math.max(...scores);
    if(highScore) {
      return highScore;
    }
    return null;
  }
  const highScore = getHighScore();
  return (
    <div className="app">
      <Header title='Score Board Application' players={players} />
      <div className='player-list'>
        {
          players.map((player, index) => (
            <Player 
              key={player.id} 
              index={index}  
              id={player.id}
              name={player.name}
              score={player.score}
              handleScoreChange={handleScoreChange}
              handleRemovePlayer={handleRemovePlayer}
              isHighScore={highScore === player.score}
            />
          ))
        }
        <AddPlayerForm handleAddPlayer={handleAddPlayer} />
      </div>
    </div>
  );
}
export default App;
