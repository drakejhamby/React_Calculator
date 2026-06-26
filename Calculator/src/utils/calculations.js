export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
export function multiply(a, b) {
    return a * b;
}
export function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

export function evaluateExpression(expression) {
    const s = expression.replace(/\s+/g, "");

    // number(op number)*  e.g. 12+3*4.5
    if (!/^\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$/.test(s)) {
        throw new Error("Invalid expression");
    }

    const tokens = s.match(/\d+(\.\d+)?|[+\-*/]/g);
    if (!tokens) throw new Error("Invalid expression");

    // Pass 1: * and /
    const stack = [Number(tokens[0])];
    for (let i = 1; i < tokens.length; i += 2) {
        const op = tokens[i];
        const n = Number(tokens[i + 1]);

        if (op === "*") {
            stack[stack.length - 1] = multiply(stack[stack.length - 1], n);
        } else if (op === "/") {
            stack[stack.length - 1] = divide(stack[stack.length - 1], n);
        } else {
            stack.push(op, n);
        }
    }

    // Pass 2: + and -
    let result = Number(stack[0]);
    for (let i = 1; i < stack.length; i += 2) {
        const op = stack[i];
        const n = Number(stack[i + 1]);
        result = op === "+" ? add(result, n) : subtract(result, n);
    }

    return Number(result.toFixed(10)).toString();
}
