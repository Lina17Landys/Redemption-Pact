import React, { useState} from "react";
import "./Wheel.css";

const options = [
  "Vida Extra",
  "Pierde Turno",
  "Avanza 3",
  "Pierde Vida",
  "Gana Turno",
  "Retrocede 2",
  "Gana 2 Vidas"
];

const Wheel = ({ onResult }) => {
  const [position, setPosition] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = () => {
    if (isSpinning) return;
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
        onResult(options[finalPosition]);
      }
    }, 150);
  };

  return (
    <div className="wheel-container">
      <div className="wheel vertical">
        {options.map((opt, index) => (
          <div
            key={index}
            className={`wheel-item ${index === position ? "selected" : ""}`}
          >
            {opt}
          </div>
        ))}
      </div>
      <button onClick={spin} disabled={isSpinning} className="spin-button">
        Girar
      </button>
    </div>
  );
};

export default Wheel;

