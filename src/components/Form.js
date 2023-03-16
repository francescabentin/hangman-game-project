

const Form = (props) => {

    const handleChangeLastLetter = (ev) => {
        const value = ev.target.value;
        props.lifting(value);
    }

    return (
        <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                value={props.lastLetter}
                onChange={handleChangeLastLetter}
            />
        </form>
    )
}

export default Form;