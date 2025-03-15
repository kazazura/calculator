let num1, operator, num2;
const display = document.querySelector('.display');
const btnClear = document.querySelector('.clear');
const btnNum = document.querySelectorAll('.number');
const btnOperator = document.querySelectorAll('.operator');
const btnEquals = document.querySelector('.equal-sign');

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
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
    btn.addEventListener('click', ()=> {
        addToDisplay(btn.value)
    })
});

btnOperator.forEach(btn => {
    btn.addEventListener('click', ()=> {
        addToDisplay(btn.value)
    })
});










// const display = document.querySelector('input');
// display.value = 1234;

// operator = '/';
// num1 = 2;
// num2 = 3;
// console.log(operate(operator, num1, num2));