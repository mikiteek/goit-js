// task-05
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке,
// то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
let priceDelivery;
const country = prompt("Enter country");

switch (country.toLowerCase()) {
  case "china":
    priceDelivery = 100;
    break;
  case "chile":
    priceDelivery = 250;
    break;
  case "australia":
    priceDelivery = 170;
    break;
  case "india":
    priceDelivery = 80;
    break;
  case "jamaica":
    priceDelivery = 120;
    break;
  default:
    priceDelivery = -1;
}
if (priceDelivery !== -1) {
  alert(`Delivey in ${country} will be ${priceDelivery}`);
}
else {
  alert("Delivery is not available in your country.");
}
