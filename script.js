let num1 = '', num2 = '', operator = '', checkerVar = false;
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

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
    }
}

function getOperator(op) {
    if (num2 === '') {
        return;
    }
    if (num1 !== '') {
        calculate();
    }
    operator = op;
    num1 = num2;
    num2 = '';
    display.value = `${num1} ${operator}`;
}

function getOperand(num) {
    num2 += num;
    display.value = `${num1} ${operator} ${num2}`;
}

function toggleSign() {
    let negativeSign = '-';
    if (num2 === '') {
        return;
    } else if (num2 !== '' && !num2.includes('-')) {
        num2 = negativeSign + num2;
    } else if (num2 !== '' && num2.includes('-')) {
        num2 = num2.slice(1);
    } else if (num1 !== '' && !num1.includes('-')) {
        num1 = negativeSign + num1;
    } else if (num1 !== '' && num1.includes('-')) {
        num1 = num1.slice(1);
    }
    display.value = `${num1} ${operator} ${num2}`;
}

function percent() {
    if (num2 === '') {
        return;
    } else if (num2 !== '') {
        num2 = num2 / 100;
    } else if (num1 === '') {
        return;
    } else if (num1 !== '') {
        num1 = num1 / 100;
    }
    display.value = `${num1} ${operator} ${num2}`;
}

function calculate() {
    if (num1 === '' || num2 === '') {
        return;
    }
    let result;
    let operand1 = parseFloat(num1);
    let operand2 = parseFloat(num2);
    if (operand2 === 0) {
        display.value = '?';
    } else {
        //rounds to 3 decimal places only
        result = operate(operator, operand1, operand2).toFixed(3);
        num2 = result.toString();
        operator = '';
        num1 = '';
        display.value = num2;
        checkerVar = true;
    }
}

function clearDisplay() {
    num1 = '';
    num2 = '';
    operator = '';
    display.value = '';
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('operator')) {
            if (checkerVar === true) {
                checkerVar = false;
            }
            getOperator(btn.value)
        } else if (btn.classList.contains('number')) {
            if (checkerVar === true) {
                clearDisplay();
                checkerVar = false;
            }
            getOperand(btn.value);
        } else if (btn.classList.contains('clear')) {
            clearDisplay();
        } else if (btn.classList.contains('equal-sign')) {
            calculate();
        } else if (btn.classList.contains('dot')) {
            if (num2.includes('.')) {
                return;
            }
            getOperand(btn.value);
        } else if (btn.classList.contains('sign-toggle')) {
            toggleSign();
        } else if (btn.classList.contains('percent')) {
            percent();
        }
    });
});


