import React, { useState } from "react";
import Wheel from "../../components/ruleta/Wheel";
import PlayerStats from "../../components/jugador/PlayerStats";
import "./ruletaP.css";

const initialPlayers = [
  { name: "Jugador 1", lives: 0, skipTurn: false },
  { name: "Jugador 2", lives: 0, skipTurn: false }
];

function RuletaPage() {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  return (
    <div className="game-container">


      <div className="stats-history">
        <PlayerStats players={players} setPlayers={setPlayers} />
      </div>

      <Wheel
        players={players}
        setPlayers={setPlayers}
        currentPlayerIndex={currentPlayerIndex}
        setCurrentPlayerIndex={setCurrentPlayerIndex}
      />

      <img className="lujuria" src="./public/img/lujuria.png"/>

    </div>
  );
}

export default RuletaPage;
