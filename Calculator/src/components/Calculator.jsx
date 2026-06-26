import Display from "./Display";
import NumPad from "./NumPad";
import "./Calculator.css";
import { useState } from "react";
import { evaluateExpression } from "../utils/calculations";

// Calculator component that manages the state and logic of the calculator
function Calculator() {
    const [displayValue, setDisplayValue] = useState("0");
    // Handle input from the NumPad and update the display value accordingly
    const handleInput = (input) => {
        if (input === "C") {
            handleClear();
        } else if (input === "DEL") {
            handleDelete();
        } else if (input === "=") {
            handleEvaluate();
        } else {
            setDisplayValue(displayValue === "0" ? input : displayValue + input);
        }
    }

    const handleClear = () => {
        setDisplayValue("0");
    }

    const handleDelete = () => {
        setDisplayValue(displayValue.slice(0, -1) || "0");
    }

    const handleEvaluate = () => {
        try {
            setDisplayValue(evaluateExpression(displayValue));
        } catch {
            setDisplayValue("Error");
        }
    }

    // Render the calculator UI
    return (
        <div className="calculator">
            <Display value={displayValue} />
            <NumPad onInput={handleInput} />
        </div>
    )
}

export default Calculator