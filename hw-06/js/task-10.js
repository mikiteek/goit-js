// task-10
// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть
// отсортированы в алфавитном порядке.

import users from "./users.js";

const getSortedUniqueSkills = users => {
  let arr = [];
  users
    .map(user => user.skills)
    .forEach(user => user.forEach(item => arr.push(item)))
  return arr
    .sort()
    .filter((item, ind) => arr.indexOf(item) === ind);

};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]