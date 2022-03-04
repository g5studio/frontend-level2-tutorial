document.getElementById('calculator')
    .addEventListener('click', event => onClick(event));

/**
 * @description 計算結果
 */
var result;
/**
 * @description 當前輸入值
 */
var currentinput;

function onClick(event) {
    switch (event.target.textContent) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            input(event.target.textContent);
            break;
        case '+': break;
        case '-': break;
        case '×': break;
        case '÷': break;
        case '=': break;
    }
}

function input(text) {
    const CurrentInput = document.getElementById('calculator-screen');
    CurrentInput.value = CurrentInput.value + text;
    currentinput = CurrentInput.value;
}

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function dividedBy(a, b) {
    return a / b;
}

function calculate() {

}