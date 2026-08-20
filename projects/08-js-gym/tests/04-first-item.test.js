const { firstItem } = require("../exercises/04-first-item.js");

function check(name, actual, expected) {
  return { name, ok: Object.is(actual, expected), actual, expected };
}

module.exports = [
  check('firstItem(["cat", "dog", "bird"])', firstItem(["cat", "dog", "bird"]), "cat"),
  check("firstItem([10, 20])", firstItem([10, 20]), 10),
  check('firstItem(["only"])', firstItem(["only"]), "only"),
];
