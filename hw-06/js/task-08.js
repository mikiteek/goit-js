// task-08
// Массив имен всех пользователей у которых есть друг с указанным именем.

import * as arr from "./users.js"
const users = arr.default;

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.find(name => name === friendName))// можно !== undefined после первой скобки прописать ) !== underfined)
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]