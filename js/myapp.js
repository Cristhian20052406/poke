import Entrenador from "./components/entrenador.js";

document.addEventListener('DOMContentLoaded', () => {
    
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const entrenadoresDiv = document.getElementById('entrenadores');

            data.forEach(entrenadorData => {
                const entrenador = new Entrenador(entrenadorData.entrenador, entrenadorData.pokemons);
                entrenadoresDiv.appendChild(entrenador.createElement());
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
