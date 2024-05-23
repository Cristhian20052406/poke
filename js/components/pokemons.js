class Pokemon {
    constructor(nombre, tipo, foto) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.foto = foto;
    }

    createElement() {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.classList.add('pokemon', this.tipo);

        const pokemonImg = document.createElement('img');
        pokemonImg.src = this.foto;

        const pokemonName = document.createElement('span');
        pokemonName.textContent = this.nombre;

        pokemonDiv.appendChild(pokemonImg);
        pokemonDiv.appendChild(pokemonName);

        return pokemonDiv;
    }
}

export default Pokemon;
