import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Roulette from "../components/Roulette";
import Scoreboard from "../components/Scoreboard";

const GameScreen = () => {
    const navigate = useNavigate(); 

    return (
        <div className="game-screen">
            <button onClick={() => navigate("/Players")} className="back-button">
        <FaArrowLeft size={30} color="white" />
      </button>

            <Roulette />
            <Scoreboard />
        </div>
    );
};

export default GameScreen;
