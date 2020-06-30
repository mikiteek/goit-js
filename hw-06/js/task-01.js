// task-01
// Получить массив имен всех пользователей (поле name).
import * as arr from "./users.js";
const users = arr.default;

const getUserNames = (users) => {
  return users.map(user => user.name);
};

 console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
