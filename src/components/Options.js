import '../styles/Instructions.scss';

const Word = props => {
    const handleChange = ev => {
        props.handleWord(ev.target.value);
    };

    const handleSubmit = ev => {
        ev.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="title" htmlFor="word">
                Escribe aquí la palabra que hay que adivinar:
            </label>
            <input
                autoFocus
                autoComplete="off"
                className="form__input"
                maxLength="15"
                type="text"
                id="word"
                name="word"
                onChange={handleChange}
                // value={props.word}  // no hay que cerrar el circulo por que es solo si es escribe
            />
        </form>
    );
};

export default Word;
