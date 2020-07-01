// task-04
// Счетчик состоит из спана и кнопок, которые должны увеличивать и
// уменьшать значение счетчика на 1.
//
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueRef = document.querySelector("#value");
const decrementRef = document.querySelector("#counter button:first-child");
const incrementRef = document.querySelector("#counter button:last-child");

let counter = +valueRef.textContent;
function increment (event) {
  counter += 1;
  valueRef.textContent = counter;
}
function decrement (event) {
  counter -= 1;
  valueRef.textContent = counter;
}

decrementRef.addEventListener("click", decrement);
incrementRef.addEventListener("click", increment);