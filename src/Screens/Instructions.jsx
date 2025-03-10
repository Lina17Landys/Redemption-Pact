import { Link } from "react-router-dom";
import "../Styles/Instructions.css";

export default function Instructions() {
    return (
        <div className="instructions-container">
         <img className="instrucciones" src="./img/instrucciones.png"/>
            <Link to="/" className="back-button">Volver a Inicio</Link>
        </div>
    );
}
