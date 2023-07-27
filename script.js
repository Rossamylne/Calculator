function add (firstNumber, secondNumber) {
    return parseFloat((parseInt(firstNumber) + parseInt(secondNumber)), 2);
}

function subtract (firstNumber, secondNumber) {
    return parseFloat((parseInt(firstNumber) - parseInt(secondNumber)), 2);
}

function multiply (firstNumber, secondNumber) {
    return parseFloat((parseInt(firstNumber) * parseInt(secondNumber)), 2);
}

function divide (firstNumber, secondNumber) {
    return parseFloat((parseInt(firstNumber) / parseInt(secondNumber)), 2);
}

function operate (firstOperande, secondOperande, operator) {
    switch(operator) {
        case "+":
            return add(firstOperande, secondOperande);
        case "-":
            return subtract(firstOperande, secondOperande);
        case "*":
            return multiply(firstOperande, secondOperande);
        case "/":
            if (secondOperande) {
                return divide(firstOperande, secondOperande);
            } else {
                return "Divide by 0 ?";
            }
    }
}



const resultDisplay = document.querySelector(".result-display");

const operatorsContainer = document.querySelector(".operators-container");
const operators = operatorsContainer.querySelectorAll("button");

const numberContainer = document.querySelector(".number-container");
const selectedNumberNode = numberContainer.querySelectorAll("button");

let firstSelectedNumber = "";
let secondSelectedNumber = "";
let selectedOperator = "";

selectedNumberNode.forEach((button) => {
    button.addEventListener('click', () => {
        (!firstSelectedNumber && !selectedOperator) ? resultDisplay.textContent = (firstSelectedNumber += button.id) :
        (firstSelectedNumber && selectedOperator) ? resultDisplay.textContent += (secondSelectedNumber += button.id):
        resultDisplay.textContent = "";
    })
})

operators.forEach((button) => {
    button.addEventListener('click', () => {
        (button.id != "AC" && button.id != "=" && !selectedOperator) ? resultDisplay.textContent += (selectedOperator = button.id) :
        (button.id === "AC") ? function() {
            firstSelectedNumber, secondSelectedNumber, selectedOperator =  "";
            resultDisplay.textContent =  " "
        }:
        (button.id === "=" && secondSelectedNumber && selectedOperator) ? 
            resultDisplay.textContent =  operate(firstSelectedNumber, secondSelectedNumber, selectedOperator):
        result = "pas fini batar"
        }
    )
})