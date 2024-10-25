const display = document.getElementById('display');
let currentInput = '';

function append(character) {
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
    currentInput += character;
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
    currentInput = currentInput.slice(0, -1);
}

function calculate() {
    try {
        display.innerText = eval(currentInput);
        currentInput = display.innerText;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}