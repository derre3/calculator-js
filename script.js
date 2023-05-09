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
        return getFirstNumber(this.className)
    }
    operate();
    selectedOperator = this.className;
    return textDisplay.textContent = Math.floor(nums[0] * 1000) / 1000;
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
    setTimeout(() => resetButtons(), 100);
    return textDisplay.textContent = buttonClicked.join('');
}

function resetButtons() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = '#5e5e5e';
            buttons[i].style.borderColor = '#797979';
            buttons[i].style.color = '#ffffff';
        }
        buttonClear.style.backgroundColor = '#e41414';
        buttonClear.style.color = '#ffffff';
        buttonBkspace.style.backgroundColor = '#e41414';
        buttonBkspace.style.color = '#ffffff';
        buttonOperate.style.backgroundColor = '#ffd900';
        buttonOperate.style.color = '#000000';
}

function clearCalc() {
    setTimeout(() => resetButtons(), 100);
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
        changeButtonColor(buttonNum[i], '#797979', '', '#ffffff')
        populateDisplay();
    });
}

const buttonDec = document.querySelector('.button.dec');
buttonDec.addEventListener('click', () => {
    buttonClicked.push(buttonDec.textContent);
    changeButtonColor(buttonDec, '#797979', '', '#ffffff')
    populateDisplay();
}, {once:true})

// click events for the rest of the buttons
const buttons = document.querySelectorAll('.button');

const buttonBkspace = document.querySelector('.button.bkspace');
buttonBkspace.addEventListener('click', () => {
    if (textDisplay.textContent.length === 1) {
        textDisplay.textContent = '0'
        buttonClicked = [];
        return
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
    return textDisplay.textContent = Math.floor(total *1000) / 1000;
});

const buttonAdd = document.querySelector('.button.add');
buttonAdd.addEventListener('click', displayOperation)

const buttonSub = document.querySelector('.button.sub');
buttonSub.addEventListener('click', displayOperation)

const buttonMultiply = document.querySelector('.button.multiply');
buttonMultiply.addEventListener('click', displayOperation)

const buttonDivide = document.querySelector('.button.divide');
buttonDivide.addEventListener('click', displayOperation)