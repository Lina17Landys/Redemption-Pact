import { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

export function GameProvider({ children }) {
    const [players, setPlayers] = useState(() => {
        const savedPlayers = localStorage.getItem("players");
        return savedPlayers ? JSON.parse(savedPlayers) : [];
    });
    const [scores, setScores] = useState({});

    useEffect(() => {
        localStorage.setItem("players", JSON.stringify(players));
    }, [players]);

    function removePlayer(index) {
        setPlayers(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <GameContext.Provider value={{ players, setPlayers, removePlayer, scores, setScores }}>
            {children}
        </GameContext.Provider>
    );
}
