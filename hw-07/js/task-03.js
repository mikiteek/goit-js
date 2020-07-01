// task-03
// Напиши скрипт для создания галлереи изображений по массиву данных.
//
// В HTML есть список ul#gallery.
//
// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img
// вложенных в li. Для создания разметки используй шаблонные
// строки и insertAdjacentHTML().
//
// Все элементы галереи должны добавляться в DOM ЗА ОДНУ ОПЕРАЦИЮ ВСТАВКИ. ???
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listRef = document.querySelector("#gallery");

const createImage = (image) => {
  const imgRef = document.createElement("img");
  imgRef.src = image.url;
  imgRef.alt = image.alt;
  imgRef.width = 300;
  imgRef.height = 200;
  return imgRef;
}

const imgRefArr = images.map(img => createImage(img));
listRef.append(...imgRefArr);

listRef.classList.add("display-flex-justify-between");
// listRef.style.display = "flex";
// listRef.style.justifyContent = "space-between";

console.log(listRef);