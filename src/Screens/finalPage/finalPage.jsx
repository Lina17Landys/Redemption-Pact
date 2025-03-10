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

  // Ordenar jugadores por vidas (de mayor a menor)
  const sortedPlayers = [...players].sort((a, b) => b.lives - a.lives);
  const heaven = sortedPlayers[0]; // Mayor cantidad de vidas
  const hell = sortedPlayers[sortedPlayers.length - 1]; // Menor cantidad de vidas
  const limbo = sortedPlayers.slice(1, -1); // Jugadores en el medio

  return (
    <div className="final-container">
      <h1>Resultados Finales</h1>

      <div className="heaven">
        <h2>☁️ Cielo</h2>
        <p>{heaven.name} ha escapado del infierno.</p>
      </div>

      <div className="limbo">
        <h2>⚫ Limbo</h2>
        {limbo.length > 0 ? (
          limbo.map((player) => <p key={player.name}>{player.name} quedó en el limbo.</p>)
        ) : (
          <p>Nadie quedó en el limbo.</p>
        )}
      </div>

      <div className="hell">
        <h2>🔥 Infierno</h2>
        <p>{hell.name} ha sido condenado al infierno.</p>
      </div>

      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </div>
  );
}

export default FinalPage;
