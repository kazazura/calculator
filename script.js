let numbers = '1234567890';
let num1, operator, num2, displayValue, result = 0;
const display = document.querySelector('.display');
const btnClear = document.querySelector('.clear');
const btnNum = document.querySelectorAll('.number');
const btnOperator = document.querySelectorAll('.operator');
const btnEquals = document.querySelector('.equal-sign');

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function modulo(num1, num2) {
    return num1 % num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '×':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
        case '%':
            return modulo(num1, num2);
    }
}

function calculate() {
    let operandArr = [];
    displayValue = display.value;
    if (displayValue.includes('+')) {
        operator = '+';
        operandArr = displayValue.split('+');
        num1 = operandArr[0];
        num2 = operandArr[1];
    } else if (displayValue.includes('÷')) {
        operator = '÷';
        operandArr = displayValue.split('÷');
        num1 = operandArr[0];
        num2 = operandArr[1];
    } else if (displayValue.includes('×')) {
        operator = '×';
        operandArr = displayValue.split('×');
        num1 = operandArr[0];
        num2 = operandArr[1];
    } else if (displayValue.includes('%')) {
        operator = '%';
        operandArr = displayValue.split('%');
        num1 = operandArr[0];
        num2 = operandArr[1];
    } else if (displayValue.at(0) === '-' && displayValue.includes('-')) {
        operator = '-';
        operandArr = displayValue.split('-');
        operandArr.shift();
        num1 = operator + operandArr[0];
        num2 = operandArr[1];
    } else {
        operator = '-';
        operandArr = displayValue.split('-');
        num1 = operandArr[0];
        num2 = operandArr[1];
    }

    if((num1 === '' || num2 === '' || operator === '')) {
        null;
    } else {
        result = operate(operator, Number(num1), Number(num2));
        console.log("num1: " + num1, '\n' + "num2: " + num2, '\n' + "result: " + result);
        display.value = result;
    }
   
}

function clearDisplay() {
    display.value = '';
}

function addToDisplay(input) {
    display.value += input;
}

btnClear.addEventListener('click', clearDisplay);

btnNum.forEach(btn => {
    btn.addEventListener('click', () => {
        addToDisplay(btn.value);
    })
});

btnOperator.forEach(btn => {
    btn.addEventListener('click', () => {
        if (display.value === '' && btn.value != '-') {
            null;
        } else if (display.value === '-') {
            null;
        } else {
            addToDisplay(btn.value);
        }
    });
});

btnEquals.addEventListener('click', () => {
    calculate();
});


// const display = document.querySelector('input');
// display.value = 1234;

// operator = '/';
// num1 = 2;
// num2 = 3;
// console.log(operate(operator, num1, num2));