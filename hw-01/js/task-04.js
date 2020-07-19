// task-04
// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits(создай и присвой).
// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
// Цена одного дроида хранится в переменной pricePerDroid(создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов
// которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение
//   'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение
//   'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let count = +prompt("Enter number of droids");
while (isNaN(count)) {
  count = +prompt("Is not number, please enter number again");
}

if (count === null) {
  console.log("Canceled by user");
}
else {
  totalPrice = count * pricePerDroid;
}

if (totalPrice > credits) {
  console.log("You do not have enough funds in your account");
}
else
  console.log(
    `You bought ${count} droids, and ${
      credits - totalPrice
    } of credits remained on your account.`
  );
