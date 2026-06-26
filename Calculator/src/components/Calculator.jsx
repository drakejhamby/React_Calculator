import Display from "./Display";
import NumPad from "./NumPad";
import "./Calculator.css";

function Calculator() {
    return (
        <div className="calculator">
            <Display />
            <NumPad />
        </div>
    )
}

export default Calculator