var display = document.querySelector('#display')
var buttons = document.querySelectorAll('.btn')

function calculate() {
    display.textContent = eval(display.textContent)
}


function addOnDisplay(value) {
    display.textContent += value;
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1)
}

function cleanDisplay() {
    display.textContent = ''
}