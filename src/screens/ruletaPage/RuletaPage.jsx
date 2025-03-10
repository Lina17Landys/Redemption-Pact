import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate(); 

  return (
    <div className="game-container">
      <div className="stats-history">
        <PlayerStats players={players} setPlayers={setPlayers} />
        
        <button className="final-button" onClick={() => navigate("/final", { state: { players } })}>
  <img className="final-play" src="/img/btnFinal.png" alt="Finalizar" />
</button>

      </div>

      <Wheel
        players={players}
        setPlayers={setPlayers}
        currentPlayerIndex={currentPlayerIndex}
        setCurrentPlayerIndex={setCurrentPlayerIndex}
      />

      <img className="lujuria" src="./public/img/lujuria.png" alt="Lujuria" />
    </div>
  );
}

export default RuletaPage;

