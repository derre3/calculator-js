function add() {
    resetButtons()
    buttonClicked = [];
    buttonAdd.style.backgroundColor = '#797979';
    buttonAdd.style.borderColor = '#ffffff';
    buttonAdd.style.color = '#ffffff';

    if (nums[0] === undefined) {
        selectedOperator = 'add';
        nums[0] = +textDisplay.textContent;;
        return textDisplay.textContent = '';
    }
    operate();
    selectedOperator = 'add';
    return textDisplay.textContent = nums[0]
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

// function operate(num, op) {
//     return op(num[0], num[1]);
// }

function populateDisplay() {
    return textDisplay.textContent = buttonClicked.join('');
}

function clearCalc() {
    buttonClicked = [];
    return textDisplay.textContent = 0;
}

const textDisplay = document.querySelector('.calculator-display');
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

const buttonOperate = document.querySelector('.button.operate');

const buttonAdd = document.querySelector('.button.add');
buttonAdd.addEventListener('click', testAdd)

let num1;
let num2;

function testAdd() {
    num1 = +textDisplay.textContent

    textDisplay.textContent = '';
    buttonClicked = [];

    if (num2 === undefined) {
        return num2 = num1
    }

    const sum = +num2 + +num1;
    num2 = undefined
    
    return textDisplay.textContent = sum
}