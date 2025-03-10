import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./final.css";

function FinalPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const players = location.state?.players || [];

  if (players.length === 0) {
    return (
      <div className="final-container">
        <h1>No hay datos de la partida.</h1>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  const sortedPlayers = [...players].sort((a, b) => b.lives - a.lives);
  const heaven = sortedPlayers[0]; 
  const hell = sortedPlayers[sortedPlayers.length - 1];
  const limbo = sortedPlayers.slice(1, -1);

  return (
    <div className="final-container">

        <img className="logo-2" src="./img/logo.png"/>
      <h1 className="final-title">Partida finalizada</h1>
  
      <div className="results-row">
        <div className="heaven">
          <p>{heaven.name} ha escapado del infierno.</p>
        </div>
  
        <div className="limbo">
          {limbo.length > 0 ? (
            limbo.map((player) => <p key={player.name}>{player.name} quedó en el limbo.</p>)
          ) : (
            <p>Nadie quedó en el limbo.</p>
          )}
        </div>
  
        <div className="hell">
          <p>{hell.name} ha sido condenado al infierno.</p>
        </div>
      </div>
  
      <button onClick={() => navigate("/")}>
        <img src="/img/botonReplay.png" alt="Reiniciar" className="button-image" />
      </button>
    </div>
  );
  
}

export default FinalPage;

