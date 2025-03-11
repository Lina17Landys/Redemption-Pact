import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../context/GameContext";
import Wheel from "../../components/ruleta/Wheel";
import PlayerStats from "../../components/jugador/PlayerStats";
import "./ruletaP.css";

function RuletaPage() {
  const { players, setPlayers } = useContext(GameContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const navigate = useNavigate(); 

  return (
<div className="game-container">
  <div className="player-stats-container">
    <PlayerStats players={players} setPlayers={setPlayers} />
  </div>

  <div className="wheel-container">
    <Wheel
      players={players}
      setPlayers={setPlayers}
      currentPlayerIndex={currentPlayerIndex}
      setCurrentPlayerIndex={setCurrentPlayerIndex}
    />

    <button className="final-button" onClick={() => navigate("/final", { state: { players } })}>
      <img className="final-play" src="/img/btnFinal.png" alt="Finalizar" />
    </button>
    <img className="lujuria" src="./public/img/lujuria.png" alt="Lujuria" />
  </div>
</div>

  );
}

export default RuletaPage;
