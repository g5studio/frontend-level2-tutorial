document.getElementById('calculator')
    .addEventListener('click', event => event.target.tagName !== 'INPUT' ? onClick(event) : null);

/**
 * @description 是否需要重置輸入
 */
var reset = false;
/**
 * @description 前次輸入值
 */
var previous = 0;
/**
 * @description 運算子
 */
var previousOperator;

function onClick(event) {
    (+event.target.textContent >= 0 || event.target.textContent === 'C') ? input(event.target.textContent) :
        calculate(event.target.textContent);
}

function input(text) {
    const Screen = document.getElementById('calculator-screen');
    Screen.value = +text >= 0 ?
        +Screen.value > 0 && !reset ? Screen.value + text :
            +text : 0;
    previous = (previousOperator !== '=' && previousOperator !== undefined) ? previous : +Screen.value;
    reset = false;
}

/**
 * @description 當前動作為=時，依照前次動作將計算結果顯示於上方，否則維持原數據
 */
function calculate(operator) {
    const Screen = document.getElementById('calculator-screen');
    Screen.value = operator === '=' ?
        previousOperator === '+' ? previous + +Screen.value :
            previousOperator === '-' ? previous - +Screen.value :
                previousOperator === '×' ? previous * +Screen.value :
                    previousOperator === '÷' ? previous / +Screen.value :
                        null :
        Screen.value;
    previousOperator = operator;
    previous = operator === '=' ? +Screen.value : previous;
    reset = true;
}
