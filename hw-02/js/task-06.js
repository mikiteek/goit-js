// task-06
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
//   пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel,
//   если массив не пустой, необходимо посчитать сумму всех элементов массива
// и записать ее в переменную total.Используй цикл for или for...of.
// После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// bell Делать проверку того, что пользователь ввел именно число,
//   а не произвольный набор символов, не обязательно.
// Если хочешь, в случае некорректного ввода, показывай alert с
// текстом 'Было введено не число, попробуйте еще раз',
//   при этом результат prompt записывать в массив чисел не нужно,
//     после чего снова пользователю предлагается ввести число в prompt.

let input;
let numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Enter a number");
  while (isNaN(Number(input))) {
    alert("You have not input a number, please try again");
    input = prompt("Enter a number");
  }
  numbers.push(Number(input));
}
numbers.pop();

if (numbers.length) {
  for (let num of numbers) {
    total += num;
  }
  console.log(`Total sum of all numbers is ${total}`);
}
else {
  console.log("Nothing entered");
}
