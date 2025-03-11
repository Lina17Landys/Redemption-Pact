import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import RuletaPage from "./ruletaPage/RuletaPage"
import "../Styles/Game.css"
const GameScreen = () => {
    const navigate = useNavigate(); 

    return (
        <div className="game-screen">
            <img className="logo-img" src="/img/logo.png" alt="Logo" />
            <button onClick={() => navigate("/Players")} className="back-button">
        <FaArrowLeft size={30} color="white" />
      </button>

            <RuletaPage />
        </div>
    );
};

export default GameScreen;