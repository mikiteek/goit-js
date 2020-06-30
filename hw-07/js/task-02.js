// task-02
// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients. Для создания DOM-узлов
// используй document.createElement().
const liRef = document.createElement("li");
const ingredientsRef = document.querySelector("#ingredients");
let tmp;
ingredients.forEach(item => {
  tmp = liRef.cloneNode(true);
  tmp.textContent = item;
  ingredientsRef.append(tmp);
})

console.log(ingredientsRef);