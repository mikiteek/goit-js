// task-02
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
import * as arr from "./users.js";
const users = arr.default;

const getUsersWithEyeColor = (users, color) => {
  return users.filter(obj => obj.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
