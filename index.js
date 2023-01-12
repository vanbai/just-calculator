const outputNode = document.querySelector('.js-output');
const numberANode = document.querySelector('.js-number-a');
const numberBNode = document.querySelector('.js-number-b');
const operationNode = document.querySelector('.js-select-operation');
const resultNode = document.querySelector('.js-btn-result');

resultNode.addEventListener('click', function() {
    const a = Number(numberANode.value);
    const b = Number(numberBNode.value);
    const operation = operationNode.value;
    const result = calculate({ a, b, operation });

    outputNode.innerHTML = result;
});