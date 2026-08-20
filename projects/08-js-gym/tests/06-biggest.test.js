const { biggest } = require("../exercises/06-biggest.js");

function check(name, actual, expected) {
  return { name, ok: Object.is(actual, expected), actual, expected };
}

module.exports = [
  check("biggest([3, 9, 2])", biggest([3, 9, 2]), 9),
  check("biggest([-1, -5, -2])", biggest([-1, -5, -2]), -1),
  check("biggest([7])", biggest([7]), 7),
];
