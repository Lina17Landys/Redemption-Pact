import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Players from "./Screens/Players";
import GameScreen from "./Screens/Game";
import Results from "./Screens/Results";
import Instructions from "./Screens/Instructions";
import { GameProvider } from "./context/GameContext";
import "./App.css";

export default function App() {
    return (
        <GameProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/players" element={<Players />} />
                <Route path="/game" element={<GameScreen />} />
                <Route path="/results" element={<Results />} />
                <Route path="/instructions" element={<Instructions />} />
            </Routes>
        </GameProvider>
    );
}