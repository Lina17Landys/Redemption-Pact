import React from "react";
import "./player.css";

const PlayerStats = ({ players }) => {
  return (
    <div className="player-stats">
      <h2>Jugadores</h2>
      {players.map((player, index) => (
        <div key={index} className="player-info">
          <span>{player.name}</span>
          <span>❤️ {player.lives}</span>
        </div>
      ))}
    </div>
  );
};

export default PlayerStats;
