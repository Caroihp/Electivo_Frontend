async function obtenerPokemon() {
    const numero = Math.floor(Math.random() * 151) + 1;
    console.log('Número del Pokemon', numero);
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;

    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        console.log('Datos del Pokemon', data);
        const nombre = data.name;
        const imagen = data.sprites.front_default;

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = "";

        const nombrePokemon = document.createElement('h2');
        nombrePokemon.textContent = nombre;

        const imagenPokemon = document.createElement('img');
        imagenPokemon.src = imagen;

        resultadoDiv.appendChild(nombrePokemon);
        resultadoDiv.appendChild(imagenPokemon);
    }
    catch{
        console.log('Error:', error);
        alert('No se pudo obtener el Pokemon');
    }
}