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

function sub() {
    resetButtons()
    buttonClicked = [];
    buttonSub.style.backgroundColor = '#797979';
    buttonSub.style.borderColor = '#ffffff';
    buttonSub.style.color = '#ffffff';

    if (nums[0] === undefined) {
        selectedOperator = 'sub';
        nums[0] = +textDisplay.textContent;
        return textDisplay.textContent = '';
    }
    operate();
    selectedOperator = 'sub';
    return textDisplay.textContent = nums[0]
}

function multiply() {
    resetButtons()
    buttonClicked = [];
    buttonMultiply.style.backgroundColor = '#797979';
    buttonMultiply.style.borderColor = '#ffffff';
    buttonMultiply.style.color = '#ffffff';

    if (nums[0] === undefined) {
        selectedOperator = 'multiply';
        nums[0] = +textDisplay.textContent;
        return textDisplay.textContent = '';
    }
    operate();
    selectedOperator = 'multiply';
    return textDisplay.textContent = nums[0]
}

function divide() {
    resetButtons()
    buttonClicked = [];
    buttonDivide.style.backgroundColor = '#797979';
    buttonDivide.style.borderColor = '#ffffff';
    buttonDivide.style.color = '#ffffff';

    if (nums[0] === undefined) {
        selectedOperator = 'divide';
        nums[0] = +textDisplay.textContent;
        return textDisplay.textContent = '';
    }
    operate();
    selectedOperator = 'divide';
    return textDisplay.textContent = nums[0]
}

function operate() {
    nums[1] = +textDisplay.textContent;
    if (selectedOperator === 'add') {
        return nums[0] += nums[1]
    } else if (selectedOperator === 'sub') {
        return nums[0] -= nums[1]
    } else if (selectedOperator === 'multiply') {
        return nums[0] *= nums[1]
    } else if (selectedOperator === 'divide') {
        return nums[0] /= nums[1]
    }
}

function populateDisplay() {
    resetButtons()
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
buttonAdd.addEventListener('click', add)

const buttonSub = document.querySelector('.button.sub');
buttonSub.addEventListener('click', sub)

const buttonMultiply = document.querySelector('.button.multiply');
buttonMultiply.addEventListener('click', multiply)

const buttonDivide = document.querySelector('.button.divide');
buttonDivide.addEventListener('click', divide)

const buttonOperate = document.querySelector('.button.operate');
buttonOperate.addEventListener('click', () => {
    operate();
    const total = nums[0]
    clearCalc();
    return textDisplay.textContent = total;
});