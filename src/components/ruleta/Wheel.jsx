import React, { useState } from "react";
import "./Wheel.css";

const challenges = [
  "Desafía a un jugador a un mini-juego rápido (piedra, papel o tijera). Si ganas, robas 1 vida, si pierdes, la cedes.",
  "Lanza un objeto al aire y atrápalo tres veces seguidas. Si lo logras, puedes robar dos vidas de otro jugador.",
  "Si estás en desventaja, puedes apostar 2 vidas en un reto contra otro jugador. Si ganas, recuperas ambas; si pierdes, quedas sin ellas.",
  "Elige a otro jugador para hacer un reto juntos (ej. decir una palabra alternando letras). Si lo logran, ambos ganan 1 vida.",
  "Si un jugador cae en una casilla peligrosa, otro puede gastar 1 vida para evitarle la penalización.",
  "Todos deben votar entre salvar a un jugador de perder 1 vida o dejarlo caer en la penalización.",
];

const Wheel = () => {
  const [position, setPosition] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState("");

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomStops = Math.floor(Math.random() * 6) + 5;
    const finalPosition = Math.floor(Math.random() * 6);

    let count = 0;
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 6);
      count++;
      if (count >= randomStops) {
        clearInterval(interval);
        setTimeout(() => {
          setIsSpinning(false);
          showChallenge(finalPosition);
        }, 500);
      }
    }, 150);
  };

  const showChallenge = (finalPosition) => {
    setCurrentChallenge(challenges[finalPosition]);
    setModalVisible(true);
  };

  return (
    <div className="wheel-container">
      <img className="logo-img" src="/img/logo.png" alt="Logo" />

      <div className="wheel vertical">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`wheel-item ${index === position ? "selected" : ""}`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <button onClick={spin} disabled={isSpinning} className="spin-button">
        <img className="button-play" src="/img/botonPlay.png" alt="Botón Girar" />
      </button>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{currentChallenge}</p>
            <button onClick={() => setModalVisible(false)}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wheel;