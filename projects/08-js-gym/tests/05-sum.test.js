const { sum } = require("../exercises/05-sum.js");

function check(name, actual, expected) {
  return { name, ok: Object.is(actual, expected), actual, expected };
}

module.exports = [
  check("sum([1, 2, 3])", sum([1, 2, 3]), 6),
  check("sum([10])", sum([10]), 10),
  check("sum([])", sum([]), 0),
  check("sum([5, -2, 1])", sum([5, -2, 1]), 4),
];
