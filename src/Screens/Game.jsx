import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import RuletaPage from "./ruletaPage/RuletaPage"

const GameScreen = () => {
    const navigate = useNavigate(); 

    return (
        <div className="game-screen">
            <button onClick={() => navigate("/Players")} className="back-button">
        <FaArrowLeft size={30} color="white" />
      </button>

            <RuletaPage />
        </div>
    );
};

export default GameScreen;
