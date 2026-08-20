const showPokemonButton = document.getElementById('showPokemonButton');
const pokemonName = document.getElementById('pokemonName');
const pokemonType = document.getElementById('pokemonType');
const pokemonImage = document.getElementById('pokemonImage');
const searchInput = document.getElementById('searchInput');

showPokemonButton.addEventListener('click', () => {
    const name = searchInput.value.toLowerCase();
    console.log('searching for pokemon', name);
    fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    .then(response => response.json())
    .then(data => {
        console.log('loaded pokemon', data);
        pokemonName.textContent = data.name;
        pokemonType.textContent = data.types.map(type => type.type.name).join(', ');
        pokemonImage.src = data.sprites.front_default;
    }).catch(() => {
        pokemonName.textContent = "Couldn't find that Pokémon!";
        pokemonType.textContent = "";
        pokemonImage.src = "";
    });
});
