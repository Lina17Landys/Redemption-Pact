import React, { useState } from "react";
import Wheel from "./components/ruleta/Wheel";
import PlayerStats from "./components/jugador/PlayerStats";
import GameHistory from "./components/historial/GameHistory";

const initialPlayers = [
  { name: "Jugador 1", lives: 3, skipTurn: false },
  { name: "Jugador 2", lives: 3, skipTurn: false }
];

function App() {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [history, setHistory] = useState([]);

  return (
    <div className="game-container">
      <Wheel
        players={players}
        setPlayers={setPlayers}
        currentPlayerIndex={currentPlayerIndex}
        setCurrentPlayerIndex={setCurrentPlayerIndex}
        setHistory={setHistory}
      />
      <PlayerStats players={players} />
      <GameHistory history={history} />
    </div>
  );
}

export default App;