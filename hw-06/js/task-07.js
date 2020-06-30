// task-07
// Получить общую сумму баланса (поле balance) всех пользователей.

import * as arr from "./users.js"
const users = arr.default;

const calculateTotalBalance = users => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
