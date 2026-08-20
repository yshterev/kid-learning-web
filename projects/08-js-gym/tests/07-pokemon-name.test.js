const { pokemonName } = require("../exercises/07-pokemon-name.js");

function check(name, actual, expected) {
  return { name, ok: Object.is(actual, expected), actual, expected };
}

module.exports = [
  check(
    'pokemonName({ name: "pikachu", type: "electric" })',
    pokemonName({ name: "pikachu", type: "electric" }),
    "pikachu"
  ),
  check(
    'pokemonName({ name: "eevee", type: "normal" })',
    pokemonName({ name: "eevee", type: "normal" }),
    "eevee"
  ),
];
