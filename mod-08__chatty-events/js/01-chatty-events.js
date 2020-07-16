
// Mousemove //
const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCallbackCounter = 0;


const throttledMousemoveCallback = _.throttle(event => { // обрачиваем в throttle
  mouseMoveCallbackCounter += 1;
  coordsOutputRef.textContent = `
    Count call of callback-function: ${mouseMoveCallbackCounter},
    X: ${event.clientX},
    Y: ${event.clientY}
  `;
}, 200); // вызываем ф-ю раз в 200 миллисекунд
window.addEventListener("mousemove", throttledMousemoveCallback);


// Input //
const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");
let inputCallbackCounter = 0;

const debouncedInputCallback = _.debounce(event => { // оборачиваем в debounce
  inputCallbackCounter += 1;
  outputRef.textContent = `
    Count call of callback-function: ${inputCallbackCounter},
    Value: ${event.target.value},
  `;
}, 300); // вызываем функцию через 300 миллисекунд после остановки события ввода

inputRef.addEventListener("input", debouncedInputCallback);