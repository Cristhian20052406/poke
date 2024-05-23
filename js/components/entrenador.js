import Pokemon from './pokemons.js';

class Entrenador {
    constructor(nombre, pokemons) {
        this.nombre = nombre;
        this.pokemons = pokemons.map(pokemonData => new Pokemon(pokemonData.nombre, pokemonData.tipo, pokemonData.foto));
    }

    createElement() {
        const entrenadorDiv = document.createElement('div');
        entrenadorDiv.classList.add('entrenador');

        const entrenadorName = document.createElement('h2');
        entrenadorName.textContent = this.nombre;

        entrenadorDiv.appendChild(entrenadorName);

        this.pokemons.forEach(pokemon => {
            entrenadorDiv.appendChild(pokemon.createElement());
        });

        return entrenadorDiv;
    }
}

export default Entrenador;
