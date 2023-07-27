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
                return "Divide by 0";
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
let lastResult = "";

selectedNumberNode.forEach((button) => {
    button.addEventListener('click', () => {
        if (!selectedOperator) {
            resultDisplay.textContent = (firstSelectedNumber += button.id);
        } else if (selectedOperator) {
            resultDisplay.textContent = (secondSelectedNumber += button.id);
        }
    })
})

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id != "AC" && button.id != "=" && !selectedOperator) {
            resultDisplay.textContent = (selectedOperator = button.id)
            lastResult = "";
        } else if (button.id === "AC") {
            firstSelectedNumber = "";
            secondSelectedNumber = ""; 
            selectedOperator = "";
            lastResult = "";
            resultDisplay.textContent =  "";
        } else if (button.id === "=" && secondSelectedNumber && selectedOperator) {
            resultDisplay.textContent =  operate(firstSelectedNumber, secondSelectedNumber, selectedOperator)
        } else if (button.id != "AC" && button.id != "=" && selectedOperator) {
            console.log(firstSelectedNumber, secondSelectedNumber, selectedOperator);
            lastResult = operate(firstSelectedNumber, secondSelectedNumber, selectedOperator);
            console.log(`last result = ${lastResult}`);
            resultDisplay.textContent = lastResult;
            selectedOperator = button.id;
            firstSelectedNumber = lastResult;
            secondSelectedNumber = "";
        } else if (button.id == "=" && lastResult) {
            console.log(`last result = ${lastResult}, firstSelectedNumber = ${firstSelectedNumber}, secondSelectedNumber = ${secondSelectedNumber}`)
            resultDisplay.textContent = operate(lastResult, secondSelectedNumber, selectedOperator);
        }
        }
    )
})