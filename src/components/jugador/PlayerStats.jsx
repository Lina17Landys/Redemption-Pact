import React from "react";
import "./player.css";

const PlayerStats = ({ players, setPlayers }) => {
  const modifyLives = (index, amount) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, i) =>
        i === index
          ? { ...player, lives: Math.max(5, player.lives + amount) }
          : player
      )
    );
  };

  return (
    <><h2 className="title-player">Jugadores</h2><div className="player-stats">
      {players.map((player, index) => (
        <div key={index} className="player-info">
          <img
            src={player.avatar}
            alt={`Avatar de ${player.name}`}
            className="player-avatar" />
          <div className="player-details">
            <span className="player-name">{player.name}</span>
            <div className="lives-control">
              <button onClick={() => modifyLives(index, -1)}>-</button>
              <span>❤️ {player.lives}</span>
              <button onClick={() => modifyLives(index, 1)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default PlayerStats;
