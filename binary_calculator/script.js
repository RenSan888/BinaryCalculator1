let currentInput = "";  // stores the input string
let operator = "";      // stores the selected operator
let firstOperand = "";  // stores the first operand

const display = document.getElementById("display");

// Initialize placeholder
display.textContent = "Enter binary";

// Function to handle button clicks or keyboard input
function input(value) {

    // If placeholder is showing, clear it on first input
    if (display.textContent === "Enter binary" && (value === "0" || value === "1")) {
        currentInput = "";
        display.textContent = "";
    }

    if (value === "0" || value === "1") {
        // Append binary digit
        currentInput += value;
        display.textContent = currentInput;
    } else if (["+", "-", "*", "/"].includes(value)) {
        if (currentInput === "") return; // ignore if no input
        firstOperand = currentInput;
        operator = value;
        currentInput = "";
        display.textContent = "";
    } else if (value === "=") {
        if (firstOperand === "" || currentInput === "" || operator === "") return;

        let a = parseInt(firstOperand, 2);
        let b = parseInt(currentInput, 2);
        let result;

        switch (operator) {
            case "+": result = a + b; break;
            case "-": result = a - b; break;
            case "*": result = a * b; break;
            case "/": result = b !== 0 ? Math.floor(a / b) : "Err"; break;
        }

        display.textContent = (result !== "Err") ? result.toString(2) : "Err";

        currentInput = "";
        firstOperand = "";
        operator = "";
    } else if (value === "C") {
        currentInput = "";
        firstOperand = "";
        operator = "";
        display.textContent = "Enter binary";
    }
}

// Keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (key === "0" || key === "1") input(key);
    else if (["+", "-", "*", "/"].includes(key)) input(key);
    else if (key === "Enter") input("=");
    else if (key === "c") input("C");
});
