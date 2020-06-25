// task-05
// Напиши функцию checkForSpam(message), принимающую 1 параметр
// message - строку.Функция проверяет ее на содержание слов spam и sale.
// Если нашли зарещенное слово то функция возвращает true, если запрещенных
// слов нет функция возвращает false.Слова в строке могут быть в
// произвольном регистре.
const checkForSpam = (message) => {
  return (
    message.toLowerCase().includes("spam") === true ||
    message.toLowerCase().includes("sale") === true
  );
};
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
