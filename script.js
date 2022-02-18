const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const sign = document.querySelector("#sign");
let equal = 0;
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
  if (num2 === 0) {
    return "Error";
  } else {
    return num1 / num2;
  }
}

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

function clearAll() {
  operation = "";
  num1 = "";
  num2 = "";
  equal = 0;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (equal === 1 && num1 != "Error") {
      clearAll();
    }
    if (operation === "") {
      if (num1.includes(".") && button.textContent === ".") {
      } else {
        num1 += button.textContent;
        display.textContent = num1;
      }
    } else if (operation != "") {
      if (num2.includes(".") && button.textContent === ".") {
      } else {
        num2 += button.textContent;
        display.textContent = num2;
      }
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (num1 === "Error" && num2 != "") {
      num2 = "";
      display.textContent = "Error";
    } else {
      if (equal === 1) {
        num2 = "";
        equal = 0;
      }
      if (num1 != "" && num2 != "") {
        num1 = window[operation](parseFloat(num1), parseFloat(num2));
        display.textContent = num1;
        num2 = "";
      }
      if (num1 === "") {
        num1 = 0;
      }
      operation = button.id;
      console.log(operation);
    }
  });
});

equalButton.addEventListener("click", function () {
  if (num1 === "Error") {
    display.textContent = "Error";
    equal = 1;
  } else {
    num1 = window[operation](parseFloat(num1), parseFloat(num2));
    display.textContent = num1;
    equal = 1;
  }
});

clear.addEventListener("click", function () {
  clearAll();
  display.textContent = 0;
});

sign.addEventListener("click", function () {
  if (num2 === "") {
    if (num1.includes("-")) {
      num1 = num1.substring(1);
      display.textContent = num1;
    } else {
      num1 = "-" + num1;
      display.textContent = num1;
    }
  } else {
    if (num2.includes("-")) {
      num2 = num2.substring(1);
      display.textContent = num2;
    } else {
      num2 = "-" + num2;
      display.textContent = num2;
    }
  }
});
