function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num, op) {
    return op(num[0], num[1]);
}

function populateDisplay() {
    return textDisplay.textContent = buttonClicked.join('');
}

function clearCalc() {
    buttonClicked = [];
    return textDisplay.textContent = '';
}

const textDisplay = document.querySelector('.calculator-display');
textDisplay.textContent = ''
let buttonClicked = []

// click event for number buttons
const buttonNum = document.querySelectorAll('.button.num');
for (let i = 0; i < buttonNum.length; i++) {
    buttonNum[i].addEventListener("click", () => {
        buttonClicked.push(buttonNum[i].textContent);
        populateDisplay();
    });
}

// click event for AC button
const buttonClear = document.querySelector('.button.clear');
buttonClear.addEventListener('click', clearCalc);