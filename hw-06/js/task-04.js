// task-04
// Получить массив только неактивных пользователей (поле isActive).

import * as arr from "./users.js"
const users = arr.default;

const getInactiveUsers = users => users.filter(user => user.isActive === false);

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]