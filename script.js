const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
let displayValue = "";
let num1 = "";
let operation = "";
let num2 = "";

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
  return operator(num1, num2);
}

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    displayValue += button.textContent;
    display.textContent = displayValue;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (num1 === "") {
      displayValue = display.textContent;
      num1 = displayValue;
    }
    if (operation != "" && displayValue != "") {
      num2 = displayValue;
      displayValue = window[operation](parseFloat(num1), parseFloat(num2));
      num1 = displayValue;
      display.textContent = num1;
      num2 = "";
      operation = "";
      displayValue = "";
    }
    display.textContent = num1;
    displayValue = "";
    operation = button.id;
    console.log(operation);
  });
});

equalButton.addEventListener("click", function () {
  num2 = displayValue;
  displayValue = window[operation](parseFloat(num1), parseFloat(num2));
  num1 = displayValue;
  display.textContent = num1;
  num2 = "";
  operation = "";
  displayValue = "";
});

clear.addEventListener("click", function () {
  num1 = "";
  num2 = "";
  displayValue = "";
  display.textContent = 0;
});
