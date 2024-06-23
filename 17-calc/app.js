"use strict";
const simpleCalc = {
    panel: document.querySelector(".panel"),
    inputs: {
        num1: document.querySelector('[name="first_number"]'),
        num2: document.querySelector('[name="second_number"]'),
    },
    notification: document.querySelector(".notification"),
};
function emplyInputs() {
    simpleCalc.panel.innerText = "Где-то нет числа";
    simpleCalc.notification.classList.add("notification__hidden");
};
function buttonClick(event) {
    const action = event.target.innerText;
    const num1 = simpleCalc.inputs.num1.value;
    const num2 = simpleCalc.inputs.num2.value;
    const result = calculate(Number(num1), Number(num2), action);
    simpleCalc.panel.innerText = `${num1} ${action} ${num2} = ${result}`;
    if (!num1) {
        emplyInputs();
        simpleCalc.inputs.num1.classList.add("emply");
    }
    else if (!num2) {
        emplyInputs();
        simpleCalc.inputs.num2.classList.add("emply");
    }
    else {
        simpleCalc.inputs.num1.classList.remove("emply");
        simpleCalc.inputs.num2.classList.remove("emply");
        simpleCalc.notification.classList.remove("notification__hidden");
        simpleCalc.panel.innerText = `${num1} ${action} ${num2} = ${result}`;
        simpleCalc.inputs.num1.value = "";
        simpleCalc.inputs.num2.value = "";
    }
};
function calculate(a, b, action) {
    switch (action) {
        case "+": {
            return a + b;
        }
        case "-": {
            return a - b;
        }
        case "*": {
            return a * b;
        }
        case "/": {
            if (b === 0) {
                return "Не имеет смысла"
            }
            return (a / b);
        }
    }
};