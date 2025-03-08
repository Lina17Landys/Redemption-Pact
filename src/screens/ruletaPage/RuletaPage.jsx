import React, { useState } from "react";
import Wheel from "../../components/ruleta/Wheel";
import PlayerStats from "../../components/jugador/PlayerStats";
import GameHistory from "../../components/historial/GameHistory";
import "./ruletaP.css"

const initialPlayers = [
  { name: "Jugador 1", lives: 3, skipTurn: false },
  { name: "Jugador 2", lives: 3, skipTurn: false }
];

function RuletaPage() {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [history, setHistory] = useState([]);

  return (
    <div className="game-container">
      <div className="stats-history">
        <PlayerStats players={players} />
        <GameHistory history={history} />
      </div>

      <Wheel
        players={players}
        setPlayers={setPlayers}
        currentPlayerIndex={currentPlayerIndex}
        setCurrentPlayerIndex={setCurrentPlayerIndex}
        setHistory={setHistory}
      />
    </div>
  );
}

export default RuletaPage;
