// task-01
// Напиши скрипт, который выполнит следующие операции.
//
  // Посчитает и выведет в консоль количество категорий в ul#categories,
  // то есть элементов li.item. Получится 'В списке 3 категории.'.
  //
  // Для каждого элемента li.item в списке ul#categories, найдет и выведет
  // в консоль текст заголовка элемента (тега h2) и количество элементов
  // в категории (всех вложенных в него элементов li).
    // Например для первой категории получится:
    //
    // Категория: Животные
    // Количество элементов: 4

const liItemRef = document.querySelectorAll(".item");
console.log(`Categories - ${liItemRef.length}`);

liItemRef.forEach(item =>
  console.log(`
    Category: ${item.querySelector("h2").textContent} 
    Element's quantity: ${item.querySelectorAll("li").length}
  `));