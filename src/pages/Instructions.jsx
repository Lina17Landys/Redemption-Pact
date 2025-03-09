import { Link } from "react-router-dom";

export default function Instructions() {
    return (
        <div>
            <h1>Instrucciones</h1>
            <p>Las reglas del juego son simples:</p>
            <Link to={"/"}>Volver a Inicio</Link>
            </div>  
    );
}