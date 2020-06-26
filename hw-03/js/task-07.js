// task-07
// Напиши скрипт управления личным кабинетом интернет банка.
//   Есть объект account в котором необходимо реализовать методы
//   для работы с балансом и историей транзакций.
/* Типов транзацкий всего два. Можно положить либо снять деньги со счета. */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  id: 1,
};
// Каждая транзакция это объект со свойствами: id, type и amount
const account = {
  balance: 0,
  transactions: [],
  // Метод создает и возвращает объект транзакции. Принимает сумму и тип транзакции.
   createTransaction(amount, type) {
    Transaction.id++;
     return {
       id: Transaction.id - 1,
       amount,
       type
     };
   },
   /* Метод отвечающий за добавление суммы к балансу. Принимает сумму танзакции. Вызывает
   * createTransaction для создания объекта транзакции после чего добавляет его в историю транзакций */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },
  /* Метод отвечающий за снятие суммы с баланса. Принимает сумму танзакции.
   Вызывает createTransaction для создания объекта транзакции после чего добавляет его в историю
   транзакций. Если amount больше чем текущий баланс, выводи сообщение о том, что снятие такой
   суммы не возможно, недостаточно средств. */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds in the account");
      return;
    }
    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
  },
  /* Метод возвращает текущий баланс */
  getBalance() {
    return this.balance;
  },
  /* Метод ищет и возвращает объект транзации по id */
  getTransactionDetails(id) {

    return this.transactions.find((obj) => {
      return obj.id === +id;
    })
  },
  /* Метод возвращает количество средств определенного типа транзакции из всей истории транзакций */
  getTransactionTotal(type) {
    let sum = 0;
    for (const item of this.transactions) {
      if (item.type === type)
        sum += item.amount;
    }
    return sum;
  },
};
account.deposit(1000);
account.deposit(500);
account.deposit(1000);
account.withdraw(400);
account.withdraw(800);
console.log(account.transactions);
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getTransactionDetails('2'));
console.log(account.getTransactionDetails(2));