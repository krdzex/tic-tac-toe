import React, { useState } from 'react';
import './App.css';
import Game from './Components/Game';
import Login from './Components/Login';

function App() {
  const [login, setLogin] = useState(true);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const gettingPlayers = (player1, player2) => {
    setPlayerOne(player1);
    setPlayerTwo(player2);
  }

  return (
    <div className="App">
      <Login trigger={login} setTrigger={setLogin} gettingPlayers={gettingPlayers} />
      {login === false && (<Game player1={playerOne} player2={playerTwo} />)}
    </div>
  );
}

export default App;
