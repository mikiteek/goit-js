const openModalBtn = document.querySelector(
  "button[data-action='open-modal']"
);
const closeModalBtn = document.querySelector(
  "button[data-action='close-modal']"
);
const backdropRef = document.querySelector(".js-backdrop");

openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);
backdropRef.addEventListener("click", onBackDropClick);

function onOpenModal() {
  window.addEventListener("keydown", onPressEscape);
  document.body.classList.add("show-modal");
}
function onCloseModal() {
  // снимаем слушателя на Escape при закрытии модылки чтоб не ыбло утечки памяти
  window.removeEventListener("keydown", onPressEscape);
  document.body.classList.remove("show-modal");
}

// если клацнули в стороне от модального окна тоже закрываем
function onBackDropClick(event) {
  // event.target - элемент на котором непосредственно произошло событие
  // event.currentTarget - где мы поймали это событие
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}
// для выхода из модалки по Escape
function onPressEscape(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}
