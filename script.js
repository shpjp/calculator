// Calculator state variables
let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let shouldResetScreen = false;

// DOM elements
const currentOperandElement = document.getElementById('current-operand');
const previousOperandElement = document.getElementById('previous-operand');

// Function to update the display
function updateDisplay() {
    currentOperandElement.textContent = currentOperand;
    if (operation != null) {
        previousOperandElement.textContent = `${previousOperand} ${operation}`;
    } else {
        previousOperandElement.textContent = '';
    }
}

// Function to append a number to the current operand
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    if (shouldResetScreen) {
        currentOperand = '';
        shouldResetScreen = false;
    }
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
    updateDisplay();
}

// Function to append a decimal point
function appendDecimal() {
    if (shouldResetScreen) {
        currentOperand = '0';
        shouldResetScreen = false;
    }
    if (currentOperand.includes('.')) return;
    currentOperand += '.';
    updateDisplay();
}

// Function to choose an operation
function chooseOperation(selectedOperation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = selectedOperation;
    previousOperand = currentOperand;
    shouldResetScreen = true;
    updateDisplay();
}

// Function to perform the calculation
function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '×':
            computation = prev * current;
            break;
        case '÷':
            if (current === 0) {
                alert('Cannot divide by zero!');
                return;
            }
            computation = prev / current;
            break;
        case '%':
            computation = prev % current;
            break;
        default:
            return;
    }
    
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    shouldResetScreen = true;
    updateDisplay();
}

// Function to clear everything
function clearAll() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    shouldResetScreen = false;
    updateDisplay();
}

// Function to delete the last digit
function deleteLast() {
    if (shouldResetScreen) return;
    currentOperand = currentOperand.toString().slice(0, -1);
    if (currentOperand === '') {
        currentOperand = '0';
    }
    updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendDecimal();
    } else if (key === '+' || key === '-') {
        chooseOperation(key);
    } else if (key === '*') {
        chooseOperation('×');
    } else if (key === '/') {
        event.preventDefault();
        chooseOperation('÷');
    } else if (key === '%') {
        chooseOperation('%');
    } else if (key === 'Enter' || key === '=') {
        compute();
    } else if (key === 'Escape') {
        clearAll();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

// Initialize the display
updateDisplay(); 