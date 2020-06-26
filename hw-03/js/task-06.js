// task-06
// Напиши скрипт со следующим функционалом:
//  Напиши функцию calculateTotalPrice(allProdcuts, productName),
//    которая получает массив объектов и имя продукта (значение свойства name).
//  Возвращает общую стоимость продукта (цена * количество).

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProdcuts, productName) => {
  const res = allProdcuts.find((item) => {
    return item.name === productName;
  });
  return res.price * res.quantity;
  // for (const item of allProdcuts) {
  //   if (item.name === productName) {
  //     return item.price * item.quantity;
  //   }
  // }
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800