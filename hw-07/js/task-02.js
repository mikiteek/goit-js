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

const ingredientsRef = document.querySelector("#ingredients");

const createItemIngredient = (ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  return liRef;
}

// const liRefArr = ingredients.map(item => createItemIngredient(item));
const liRefArr = ingredients.map(createItemIngredient); // выше тоже токо не сокращенно
ingredientsRef.append(...liRefArr);

console.log(ingredientsRef);