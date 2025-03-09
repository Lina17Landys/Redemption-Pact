import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import { useNavigate } from "react-router-dom";
import PlayerList from "../components/PlayerList";

export default function Players() {
    const { players, setPlayers } = useContext(GameContext);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    
    function addPlayer() {
        if (name.trim() !== "") {
            setPlayers(prev => [...prev, name]);
            setName("");
        }
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            addPlayer();
        }
    }
    
    return (
        <div>
            <h2>Ingresar Jugadores</h2>
            <input value={name} onChange={e => setName(e.target.value)}
            onKeyDown={handleKeyPress}
            />
            <button onClick={addPlayer}>Agregar</button>
            <PlayerList />
            <button onClick={() => navigate("/game")} disabled={players.length === 0}>Iniciar Juego</button>
        </div>
    );
}