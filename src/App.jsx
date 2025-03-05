import React, { useState } from "react";
import Wheel from "./components/ruleta/Wheel";
import PlayerStats from "./components/jugador/PlayerStats";

const initialPlayers = [
  { name: "Jugador 1", lives: 3 },
  { name: "Jugador 2", lives: 3 }
];

function App() {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  return (
    <div className="game-container">
      <Wheel
        players={players}
        setPlayers={setPlayers}
        currentPlayerIndex={currentPlayerIndex}
        setCurrentPlayerIndex={setCurrentPlayerIndex}
      />
      <PlayerStats players={players} />
    </div>
  );
}

export default App;

