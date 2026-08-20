const { greet } = require("../exercises/01-greet.js");

function check(name, actual, expected) {
  return { name, ok: Object.is(actual, expected), actual, expected };
}

module.exports = [
  check('greet("Alex")', greet("Alex"), "Hello, Alex"),
  check('greet("Sam")', greet("Sam"), "Hello, Sam"),
  check('greet("")', greet(""), "Hello, "),
];
