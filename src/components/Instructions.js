import '../styles/Instructions.scss';

const Instructions = () => {
    return (
        <section class="instructions">
            <p>
                El propio juego u otro jugador, según la versión, ponen una palabra secreta, de la que se conoce el número de letras y hasta tres comodines de pista como ayuda. El jugador podrá ir pidiendo letras que aparecerán en la palabra secreta si ésta las contiene, en caso contrario contará como fallo. El objetivo consiste en acertar la palabra secreta sin cometer más de seis fallos y antes de que se agote el tiempo. El jugador podrá pedir hasta tres comodines de tiempo. Tanto los comodines de pista como los de tiempo restan puntuación al ser utilizados.
             </p>
        </section>
    )
}

export default Instructions;