import './NumPad.css'

function NumPad({onInput}) {

    function handleClick(e) {
        onInput(e.target.innerText)
    }
    return (
        <div className="numpad">
            <button type="button" onClick={handleClick}>7</button>
            <button type="button" onClick={handleClick}>8</button>
            <button type="button" onClick={handleClick}>9</button>
            <button type="button" className="operator" onClick={handleClick}>/</button>

            <button type="button" onClick={handleClick}>4</button>
            <button type="button" onClick={handleClick}>5</button>
            <button type="button" onClick={handleClick}>6</button>
            <button type="button" className="operator" onClick={handleClick}>*</button>

            <button type="button" onClick={handleClick}>1</button>
            <button type="button" onClick={handleClick}>2</button>
            <button type="button" onClick={handleClick}>3</button>
            <button type="button" className="operator" onClick={handleClick}>-</button>

            <button type="button" className="zero" onClick={handleClick}>0</button>
            <button type="button" onClick={handleClick}>.</button>
            <button type="button" className="equals" onClick={handleClick}>=</button>
            <button type="button" className="operator" onClick={handleClick}>+</button>
            <button type="button" className="clear" onClick={() => onInput("C")}>C</button>
            <button type="button" className="delete" onClick={() => onInput("DEL")}>DEL</button>
        </div>
    )
}

export default NumPad