// task-06
// Напиши скрипт, который бы при потере фокуса на инпуте,
  // проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector("#validation-input");

function inputValidation(event) {
  inputRef.getAttribute("data-length") !== event.target.value.length.toString()
    ? addInValidModificator()
    : addValidModificator();
}
function addValidModificator() {
  inputRef.classList.add("valid");
  inputRef.classList.remove("invalid")
}
function addInValidModificator() {
  inputRef.classList.add("invalid");
  inputRef.classList.remove("valid");
}
inputRef.addEventListener("blur", inputValidation);
