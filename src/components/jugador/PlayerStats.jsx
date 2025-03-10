import React from "react";
import "./player.css";

const PlayerStats = ({ players, setPlayers }) => {
  const modifyLives = (index, amount) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, i) =>
        i === index ? { ...player, lives: Math.max(0, player.lives + amount) } : player
      )
    );
  };

  return (
    <div className="player-stats">
      <h2>Jugadores</h2>
      {players.map((player, index) => (
        <div key={index} className="player-info">
          <span>{player.name}</span>
          <div className="lives-control">
            <button onClick={() => modifyLives(index, -1)}>-</button>
            <span>❤️ {player.lives === 0 ? 0 : player.lives}</span>
            <button onClick={() => modifyLives(index, 1)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerStats;