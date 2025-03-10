import { Link } from "react-router-dom";
import "../Styles/Instructions.css"; // Asegúrate de crear este archivo CSS para los estilos

export default function Instructions() {
    return (
        <div className="instructions-container">
            <h1 className="title">THE REDEMPTION PACT</h1>

            <section className="setup">
                <h2>Preparación del Juego</h2>
                <ol>
                    <li>Coloca el tablero en el centro de la mesa.</li>
                    <li>Cada jugador elige una ficha y la coloca en el primer anillo.</li>
                    <li>Entrega 5 vidas a cada jugador.</li>
                    <li>Abre la plataforma digital en una pantalla accesible para todos.</li>
                    <li>Define quién inicia lanzando el dado.</li>
                </ol>
            </section>

            <section className="gameplay">
                <h2>Cómo Jugar</h2>
                <p>Cada turno sigue esta secuencia:</p>
                <ol>
                    <li>Lanza el dado y avanza en el tablero según el número obtenido.</li>
                    <li>Aplica el efecto de la casilla en la que caíste:</li>
                    <ul>
                        <li><strong>Casilla buena:</strong> Escoge una carta con un reto colaborativo.</li>
                        <li><strong>Casilla mala:</strong> Activa la ruleta y recibe un castigo.</li>
                        <li><strong>Casilla icon:</strong> Sigue la acción del icono.</li>
                        <li><strong>Casilla reposo:</strong> No sucede nada, pasa al siguiente turno.</li>
                    </ul>
                    <li>Ajusta las vidas según lo indicado.</li>
                    <li>Pasa el turno al siguiente jugador.</li>
                </ol>
            </section>

            <section className="endgame">
                <h2>Fin del Juego</h2>
                <p>El juego termina cuando un jugador alcanza la casilla de escape. Los demás jugadores pueden quedar en:</p>
                <ul>
                    <li><strong>Cielo:</strong> Jugadores con más de 5 vidas.</li>
                    <li><strong>Limbo:</strong> Jugadores con vidas dentro del purgatorio.</li>
                    <li><strong>Infierno:</strong> Jugadores sin vidas al final del juego.</li>
                </ul>
            </section>

            <section className="contents">
                <h2>Contenido del Juego</h2>
                <ul>
                    <li>Tablero con 5 anillos numerados.</li>
                    <li>6 fichas de jugadores.</li>
                    <li>Dado de 6 caras.</li>
                    <li>Cartas con retos y castigos.</li>
                    <li>Plataforma digital con ruleta y gestión de vidas.</li>
                </ul>
            </section>

            <Link to="/" className="back-button">Volver a Inicio</Link>
        </div>
    );
}
