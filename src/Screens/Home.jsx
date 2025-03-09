import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Bienvenido al Juego</h1>
            <Link to="/players">Iniciar</Link>
            <br />
            <Link to="/Instructions">Instrucciones</Link>
        </div>
    );
}
