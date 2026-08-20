const { clickerBonus } = require("../exercises/08-clicker-bonus.js");

function check(name, actual, expected) {
  return { name, ok: Object.is(actual, expected), actual, expected };
}

module.exports = [
  check("clickerBonus(0)", clickerBonus(0), 0),
  check("clickerBonus(9)", clickerBonus(9), 0),
  check("clickerBonus(10)", clickerBonus(10), 1),
  check("clickerBonus(25)", clickerBonus(25), 2),
  check("clickerBonus(30)", clickerBonus(30), 3),
];
