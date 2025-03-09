import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function PlayerList() {
  const { players, removePlayer } = useContext(GameContext);
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>
          {player} <button onClick={() => removePlayer(index)}>X</button>
        </li>
      ))}
    </ul>
  );
}
