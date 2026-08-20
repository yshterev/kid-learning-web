const { add } = require("../exercises/02-add.js");

function check(name, actual, expected) {
  return { name, ok: Object.is(actual, expected), actual, expected };
}

module.exports = [
  check("add(2, 3)", add(2, 3), 5),
  check("add(10, -4)", add(10, -4), 6),
  check("add(0, 0)", add(0, 0), 0),
];
