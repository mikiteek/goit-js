// task-02
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  name: "Hart",
  items: ['Knife', 'Gas mask'],
  changeName(n) {
    this.name = n;
  },
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

const change = function(newName, action) {
  console.log(action)
  action(newName);
}
change("John", inventory.changeName);
// invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']
