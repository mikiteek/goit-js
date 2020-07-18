const express = require("express");
const validator = require("validator");
const throttle = require("lodash.throttle");
const greeter = require("./greeter");

greeter("Hi there");

const validateEmail = email => {
  return validator.isEmail(email);
};
console.log(
  'Is mango@mail.com a valid email?: ',
  validateEmail('mango@mail.com'),
);

console.log(
  'Is Mangozedog.com a valid email?: ',
  validateEmail('Mangozedog.com'),
);

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(5000, () => {
  console.log("App is running on port 5000");
});