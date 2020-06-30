// task-03
// Получить массив имен пользователей по полу (поле gender).

import * as arr from "./users.js";
const users = arr.default;

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender);
};

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]