// JavaScript Calculator
let currentInput = '0';
let previousInput = '';
let operation = null;
let resetScreen = false;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            inputNumber(button.textContent);
        } else if (button.classList.contains('operator')) {
            inputOperator(button.textContent);
        } else if (button.classList.contains('equals')) {
            calculate();
        } else if (button.classList.contains('clear')) {
            clear();
        }
    });
});

function inputNumber(num) {
    if (resetScreen) {
        currentInput = '0';
        resetScreen = false;
    }
    if (currentInput === '0') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function inputOperator(op) {
    if (operation !== null) {
        calculate();
    }
    previousInput = currentInput;
    operation = op;
    resetScreen = true;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    resetScreen = true;
    updateDisplay();
}

function clear() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}