import React, { useState } from "react";
import "./Wheel.css";
import PlayerStats from "../jugador/PlayerStats";

const options = [
  { text: "Vida Extra", effect: (player) => (player.lives++) },
  { text: "Pierde Turno", effect: (player) => (player.skipTurn = true) },
  { text: "Avanza 3", effect: (player) => (player.position += 3) },
  { text: "Pierde Vida", effect: (player) => (player.lives--) },
  { text: "Gana Turno", effect: (player) => (player.extraTurn = true) },
  { text: "Retrocede 2", effect: (player) => (player.position -= 2) },
  { text: "Gana 2 Vidas", effect: (player) => (player.lives += 2) }
];

const initialPlayers = [
  { name: "Jugador 1", lives: 3, skipTurn: false },
  { name: "Jugador 2", lives: 3, skipTurn: false }
];
initialPlayers;

const Wheel = ({ players, setPlayers, currentPlayerIndex, setCurrentPlayerIndex, setHistory }) => {
  const [position, setPosition] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = () => {
    if (isSpinning || players[currentPlayerIndex].skipTurn) return;
    setIsSpinning(true);

    const randomStops = Math.floor(Math.random() * 20) + 10;
    const finalPosition = (position + randomStops) % options.length;

    let count = 0;
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % options.length);
      count++;
      if (count >= randomStops) {
        clearInterval(interval);
        setIsSpinning(false);
        applyEffect(finalPosition);
      }
    }, 150);
  };

  const applyEffect = (finalPosition) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      options[finalPosition].effect(updatedPlayers[currentPlayerIndex]);
  
      setHistory((prevHistory) => {
        const newEvent = `${updatedPlayers[currentPlayerIndex].name} obtuvo: ${options[finalPosition].text}`;
        return prevHistory[0] !== newEvent ? [newEvent, ...prevHistory.slice(0, 4)] : prevHistory;
      });
  
      return updatedPlayers;
    });
  
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
  };
  

  return (
    <div className="wheel-container">
      <div className="wheel vertical">
        {options.map((opt, index) => (
          <div
            key={index}
            className={`wheel-item ${index === position ? "selected" : ""}`}
          >
            {opt.text}
          </div>
        ))}
      </div>
      <button onClick={spin} disabled={isSpinning || players[currentPlayerIndex].skipTurn} className="spin-button">
        Girar ({players[currentPlayerIndex].name})
      </button>
    </div>
  );
};

export default Wheel;

