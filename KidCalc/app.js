function validateForm() {
    const kidId = document.getElementById('kid-id').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;

    if (password !== "KidCalc") {
        alert("Incorrect password. Please enter the correct password.");
        return false;
    }

    if (age < 3 || age > 12) {
        alert("Age must be between 3 and 12.");
        return false;
    }

    localStorage.setItem('kidId', kidId);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);

    const selectedTheme = document.getElementById('theme').value;
    switch (selectedTheme) {
        case 'default':
            window.location.href = 'dashboard.html'; 
            return false; 
        case 'moonlit':
            window.location.href = 'theme4.html'; 
            return false; 
        case 'ocean':
            window.location.href = 'theme2.html';
            return false; 
        case 'forest':
            window.location.href = 'theme1.html'; 
            return false; 
        case 'candy':
            window.location.href = 'theme3.html'; 
            return false; 
        default:
            break;
    }

    return false;
}


document.addEventListener('DOMContentLoaded', function () {
    let expression = "";
    let firstOperand = "";
    let operator = "";
    let secondOperand = "";
    let score = 0; 

    const mathExpression = document.querySelector('.math-expression');
    const answerInput = document.querySelector('.answer-input');
    const submitBtn = document.querySelector('.submit-btn');
    const resultsBox = document.querySelector('.results-box');
    const clearBtn = document.querySelector('.clear-btn');

    const numberButtons = document.querySelectorAll('.number-btn');
    const operatorButtons = document.querySelectorAll('.operator-btn');

    numberButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (!operator) {
                firstOperand += button.textContent;
            } else {
                secondOperand += button.textContent;
            }
            expression += button.textContent;
            mathExpression.textContent = expression;
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', function () {
            operator = button.textContent;
            expression += ` ${operator} `;
            mathExpression.textContent = expression;
        });
    });

    submitBtn.addEventListener('click', function () {
        let result;

        if (operator === '>') {
            result = parseInt(firstOperand) > parseInt(secondOperand);
        } else if (operator === '<') {
            result = parseInt(firstOperand) < parseInt(secondOperand);
        } else {
            result = eval(expression); 
        }

        if (result === parseInt(answerInput.value)) {
            resultsBox.textContent = "Great job!";
            score += 4; 
        } else {
            resultsBox.textContent = "Try again";
            score -= 1; 
        }

        document.getElementById('kid-score').textContent = score;

        expression = "";
        firstOperand = "";
        operator = "";
        secondOperand = "";
        mathExpression.textContent = "";
        answerInput.value = "";
    });

    clearBtn.addEventListener('click', function () {
        expression = "";
        firstOperand = "";
        operator = "";
        secondOperand = "";
        mathExpression.textContent = "";
        answerInput.value = "";
        resultsBox.textContent = "";
    });
});


const kidId = localStorage.getItem('kidId');
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

document.getElementById('kid-id').textContent = kidId;
document.getElementById('kid-name').textContent = name;
document.getElementById('kid-age').textContent = age;



