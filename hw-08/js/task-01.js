// task-01
// https://github.com/goitacademy/javascript-homework/tree/master/homework-08

import photos from "./gallery-items.js"
const refs = {
  ul: document.querySelector(".js-gallery"),
}

let index = 0;

function createLiItem(itemInfo) {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  li.innerHTML = `<a class="gallery__link" href="${itemInfo.original}">
                    <img class="gallery__image" src="${itemInfo.preview}" 
                      data-source="${itemInfo.original}"
                      data-value="${index++}"
                      alt="${itemInfo.description}"
                      width="340"/>                    
                  </a>`
  return li;
}

const liArrRef = photos.map(img => createLiItem(img));

refs.ul.append(...liArrRef);