const refs = {
  tags: document.querySelector(".js-tags"),
  activeTagOutput: document.querySelector(".js-active-tag"),
};

refs.tags.addEventListener("click", onTagsClick);

function onTagsClick(event) {
  if (event.target.nodeName !== "BUTTON") // если клацнули не на кнопку
    return;
  const nextActiveTag = event.target;
  const activeTagValue = nextActiveTag.dataset.value;

  setActiveTag(nextActiveTag);
  updateOutput(activeTagValue);
}
function setActiveTag(nextActiveTag) {
  // выходит ищем в списке элемент с классом "tags__btn--active"
  const currentActiveTag = refs.tags.querySelector(
    ".tags__btn--active"
  );

  // если активный есть, снимаем с него класс, перед установкой на др button
  if (currentActiveTag) {
    currentActiveTag.classList.remove("tags__btn--active");
  }

  // снимаем active если выбрали тот же элемент
  if (currentActiveTag !== nextActiveTag)
    nextActiveTag.classList.add("tags__btn--active");
}
function updateOutput(value) {
  //в аттрибутах что после data- это будет ключом(у нас 'value')
  refs.activeTagOutput.textContent = value;
}