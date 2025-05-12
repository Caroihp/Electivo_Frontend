document.getElementById('consultar').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudad').value;
    const apiKey = '841a3649906aaa0efe02b5a653733fac';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            const temp = data.main.temp;
            const humedad = data.main.humidity;
            const viento = data.wind.speed;
            const descripcion = data.weather[0].description;
            const icono = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icono}@2x.png`;

            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = ""; // Limpiar resultados previos

            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta-clima';

            const iconoImg = document.createElement('img');
            iconoImg.src = iconUrl;
            iconoImg.alt = descripcion;

            const tempP = document.createElement('p');
            tempP.textContent = `🌡️ Temperatura: ${temp} °C`;

            const humedadP = document.createElement('p');
            humedadP.textContent = `💧 Humedad: ${humedad} %`;

            const vientoP = document.createElement('p');
            vientoP.textContent = `🌬️ Viento: ${viento} m/s`;

            const descripcionP = document.createElement('p');
            descripcionP.textContent = `📝 Descripción: ${descripcion}`;
            descripcionP.appendChild(iconoImg);

            tarjeta.appendChild(tempP);
            tarjeta.appendChild(humedadP);
            tarjeta.appendChild(vientoP);
            tarjeta.appendChild(descripcionP);

            resultadoDiv.appendChild(tarjeta); // Añadir la tarjeta al div de resultados
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al obtener los datos meteorológicos, intente nuevamente');
        });
});

