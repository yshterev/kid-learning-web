const { isEven } = require("../exercises/03-is-even.js");

function check(name, actual, expected) {
  return { name, ok: Object.is(actual, expected), actual, expected };
}

module.exports = [
  check("isEven(4)", isEven(4), true),
  check("isEven(7)", isEven(7), false),
  check("isEven(0)", isEven(0), true),
];
