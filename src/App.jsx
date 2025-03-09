import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/Players";
import GameScreen from "./pages/Game";
import Results from "./pages/Results";
import Instructions from "./pages/Instructions";
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