// task-08
// Напиши скрипт создания и очистки коллекции элементов. Пользователь
// вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить,
// коллекция элементов очищается.
//
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
//
// Каждый созданный div:
  // Имеет случайный rgb цвет фона
  // Размеры самого первого div - 30px на 30px
  // Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
  // Создай функцию destroyBoxes(), которая очищает div#boxes.

const valueRef = document.querySelector("#controls input");
const createButtonRef = document.querySelector("button[data-action=render]");
const clearButtonRef = document.querySelector("button[data-action=destroy]");
const divBoxesRef = document.querySelector("#boxes");

let divArrRef = [];
const random = () => Math.floor(Math.random() * 256);

function createBoxes(amount) {
  destroyBoxes();
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const divRef = document.createElement("div");
    divRef.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    divRef.style.width = `${width}px`;
    divRef.style.height = `${height}px`
    divArrRef.push(divRef);
    width += 10;
    height += 10;
  }
  divBoxesRef.append(...divArrRef);
}

function destroyBoxes() {
  divArrRef.forEach(item => item.remove());
  divArrRef = [];
}

createButtonRef.addEventListener("click", () => createBoxes(valueRef.value));
clearButtonRef.addEventListener("click", destroyBoxes);