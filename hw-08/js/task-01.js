// task-01
// https://github.com/goitacademy/javascript-homework/tree/master/homework-08

import photos from "./gallery-items.js"
const refs = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".lightbox"),
  backDrop: document.querySelector(".lightbox__content"),
  closeBtn: document.querySelector("button[data-action='close-lightbox']"),
  largeImg: document.querySelector(".lightbox__image"),
  leftBtn: document.querySelector(".icon-button__left"),
  rightBtn: document.querySelector(".icon-button__right")
}
refs.gallery.addEventListener("click", onGalleryClick);
refs.backDrop.addEventListener("click", onBackDropClick);
refs.closeBtn.addEventListener("click", onCloseModal);
refs.rightBtn.addEventListener("click", flipRight);
refs.leftBtn.addEventListener("click", flipLeft);

let indexImg = 0;
function createLiItem(itemInfo) {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  li.innerHTML = `<a class="gallery__link" href="${itemInfo.original}">
                    <img class="gallery__image" src="${itemInfo.preview}" 
                      data-source="${itemInfo.original}"
                      data-value="${indexImg++}"
                      alt="${itemInfo.description}"
                      width="340"/>                    
                  </a>`
  return li;
}
const liArrRef = photos.map(img => createLiItem(img));
refs.gallery.append(...liArrRef);


function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG")
    return;

  onOpenModal();
  setLargeImage(event.target);
}
function onBackDropClick(event) {
  if (event.target === event.currentTarget)
    onCloseModal();
}
function onPressEscape(event) {
  if (event.code === "Escape")
    onCloseModal();
}
function onOpenModal() {
  window.addEventListener("keydown", onPressEscape);
  window.addEventListener("keydown", onPressKeyRight);
  window.addEventListener("keydown", onPressKeyLeft);
  refs.modal.classList.add("is-open");
}
function onCloseModal() {
  window.removeEventListener("keydown", onPressEscape);
  window.removeEventListener("keydown", onPressKeyRight);
  window.removeEventListener("keydown", onPressKeyLeft);
  refs.modal.classList.remove("is-open");
  clearImageAttr();
}
function setLargeImage(imageRef) {
  refs.largeImg.src = imageRef.dataset.source;
  refs.largeImg.alt = imageRef.alt;
  refs.largeImg.dataset.value = imageRef.dataset.value;
}
function clearImageAttr() {
  refs.largeImg.src = "";
  refs.largeImg.alt = "";
}
function onPressKeyRight(event) {
  if (event.code === "ArrowRight")
    flipRight();
}
function onPressKeyLeft(event) {
  if (event.code === "ArrowLeft")
    flipLeft();
}
function flipRight() {
  const index = +refs.largeImg.dataset.value;
  if (index === photos.length - 1)
    return;
  flipSetImgAttribute(1, index);
}
function flipSetImgAttribute(step, currentIndex) {
  refs.largeImg.src = photos[currentIndex + step].original;
  refs.largeImg.alt = photos[currentIndex + step].description;
  refs.largeImg.dataset.value = `${currentIndex + step}`;
}
function flipLeft() {
  const index = +refs.largeImg.dataset.value;
  if (index === 0)
    return;
  flipSetImgAttribute(-1, index);
}
