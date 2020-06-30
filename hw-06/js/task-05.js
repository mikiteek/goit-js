// task-05
  // Получить пользоваля (не массив) по email (поле email, он уникальный).

import * as arr from "./users.js"
const users = arr.default;


const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// {объект пользователя Elma Head}