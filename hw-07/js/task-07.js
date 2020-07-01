// task-07
// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет
// инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

function handleFontSize(event) {
  textRef.style.fontSize = ((+event.target.value) / 2).toString() + "px";
}

inputRef.addEventListener("input", handleFontSize);