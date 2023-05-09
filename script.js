function changeButtonColor(button) {
    button.style.backgroundColor = '#797979';
    button.style.borderColor = '#ffffff';
    button.style.color = '#ffffff';
}

function getFirstNumber(op) {
    selectedOperator = op;
    nums[0] = +textDisplay.textContent;
    return textDisplay.textContent = '';
}

function displayOperation() {
    resetButtons();
    changeButtonColor(this);
    buttonClicked = [];
    if (nums[0] === undefined) {
        return getFirstNumber(this.className)
    }
    operate();
    selectedOperator = this.className;
    return textDisplay.textContent = nums[0]
}

function operate() {
    nums[1] = +textDisplay.textContent;
    if (selectedOperator === 'button add') {
        nums[0] += nums[1];
    } else if (selectedOperator === 'button sub') {
        nums[0] -= nums[1];
    } else if (selectedOperator === 'button multiply') {
        nums[0] *= nums[1];
    } else if (selectedOperator === 'button divide') {
        nums[0] /= nums[1];
    }
    return nums[0]
}

function populateDisplay() {
    resetButtons();
    return textDisplay.textContent = buttonClicked.join('');
}

function resetButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#ffffff'
        buttons[i].style.borderColor = '#797979';
        buttons[i].style.color = '#000000';
    }
}

function clearCalc() {
    resetButtons()
    buttonClicked = [];
    nums = [];
    return textDisplay.textContent = 0;
}

const textDisplay = document.querySelector('.calculator-display');

let buttonClicked = [];
let nums = [];
let selectedOperator

// click event for number buttons
const buttonNum = document.querySelectorAll('.button.num');
for (let i = 0; i < buttonNum.length; i++) {
    buttonNum[i].addEventListener("click", () => {
        buttonClicked.push(buttonNum[i].textContent);
        populateDisplay();
    });
}

// click event for AC button
const buttons = document.querySelectorAll('.button');

const buttonClear = document.querySelector('.button.clear');
buttonClear.addEventListener('click', clearCalc);

const buttonAdd = document.querySelector('.button.add');
buttonAdd.addEventListener('click', displayOperation)

const buttonSub = document.querySelector('.button.sub');
buttonSub.addEventListener('click', displayOperation)

const buttonMultiply = document.querySelector('.button.multiply');
buttonMultiply.addEventListener('click', displayOperation)

const buttonDivide = document.querySelector('.button.divide');
buttonDivide.addEventListener('click', displayOperation)

const buttonOperate = document.querySelector('.button.operate');
buttonOperate.addEventListener('click', () => {
    operate();
    const total = nums[0]
    clearCalc();
    return textDisplay.textContent = total;
});