function changeButtonColor(button, bgColor, bdColor, txtColor) {
    button.style.backgroundColor = bgColor;
    button.style.borderColor = bdColor;
    button.style.color = txtColor;
}

function getFirstNumber(op) {
    selectedOperator = op;
    nums[0] = +textDisplay.textContent;
    return textDisplay.textContent = '';
}

function displayOperation() {
    resetButtons();
    changeButtonColor(this, '#ffd900', '', '#000000');
    buttonClicked = [];
    if (nums[0] === undefined) {
        return getFirstNumber(this.id)
    }
    operate();
    selectedOperator = this.id;
    return textDisplay.textContent = Math.floor(nums[0] * 1000) / 1000;
}

function operate() {
    nums[1] = +textDisplay.textContent;
    if (selectedOperator === 'add') {
        return nums[0] += nums[1];
    } else if (selectedOperator === 'sub') {
        return nums[0] -= nums[1];
    } else if (selectedOperator === 'multiply') {
        return nums[0] *= nums[1];
    } else if (selectedOperator === 'divide') {
        return nums[0] /= nums[1];
    }
}

function populateDisplay() {
    setTimeout(() => resetButtons(), 100);
    return textDisplay.textContent = buttonClicked.join('');
}

// reset buttons to original colors
function resetButtons() {
    buttons.forEach(button => {
        button.style.backgroundColor = '#5e5e5e';
        button.style.borderColor = '#797979';
        button.style.color = '#ffffff';
    });
    buttonClear.style.backgroundColor = '#e41414';
    buttonClear.style.color = '#ffffff';
    buttonBkspace.style.backgroundColor = '#e41414';
    buttonBkspace.style.color = '#ffffff';
    buttonOperate.style.backgroundColor = '#ffd900';
    buttonOperate.style.color = '#000000';
}

// Timeout is set so the buttons can have an effect on click
function clearCalc() {
    setTimeout(() => resetButtons(), 100);
    buttonClicked = [];
    nums = [];
    return textDisplay.textContent = 0;
}

// Global variables
let buttonClicked = [];
let nums = [];
let selectedOperator
// used as a variable (textDisplay.textContent) to update the calculator display
const textDisplay = document.querySelector('.calculator-display');

// click event for number buttons
const buttonNum = document.querySelectorAll('.button.num');
buttonNum.forEach(button => {
    button.addEventListener('click', () => {
        buttonClicked.push(button.textContent);
        changeButtonColor(button, '#797979', '', '#bbbbbb');
        populateDisplay();
    })
});

const buttonDec = document.querySelector('.button.dec');
buttonDec.addEventListener('click', () => {
    if (!textDisplay.textContent.includes('.')) {
        buttonClicked.push(buttonDec.textContent);
        changeButtonColor(buttonDec, '#797979', '', '#ffffff')
        populateDisplay();
    }
})

// click events for the rest of the buttons
const buttons = document.querySelectorAll('.button');

const buttonBkspace = document.querySelector('.button.bkspace');
buttonBkspace.addEventListener('click', () => {
    if (textDisplay.textContent.length === 1) {
        textDisplay.textContent = '0'
        return buttonClicked = [];
    };
    textDisplay.textContent = textDisplay.textContent.slice(0, -1);
    return buttonClicked = [textDisplay.textContent];
})

const buttonClear = document.querySelector('.button.clear');
buttonClear.addEventListener('click', () => {
    changeButtonColor(buttonClear, '', '', 'red');
    clearCalc();
});

const buttonOperate = document.querySelector('.button.operate');
buttonOperate.addEventListener('click', () => {
    changeButtonColor(buttonOperate, '', '', '#ffffff')
    operate();
    const total = nums[0]
    clearCalc();
    return textDisplay.textContent = Math.floor(total * 1000) / 1000;
});

const buttonOperator = document.querySelectorAll('.button.operator');
buttonOperator.forEach(operator => {
    operator.addEventListener('click', displayOperation);
});