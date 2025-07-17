function buscarClima() {
  const cidade = document.getElementById("cidade").value;
  const apiKey = "sua_chave_api_aqui"; // substitua por sua chave da API do OpenWeatherMap

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)
    .then(response => response.json())
    .then(data => {
      const resultado = document.getElementById("resultado");

      if (data.cod != 200) { // só continua se a API respondeu OK
        resultado.innerHTML = `<p>Erro: ${data.message}</p>`;
        return;
      }

      // se a resposta for válida, exibe as informações
      resultado.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Umidade: ${data.main.humidity}%</p>
        <p>Vento: ${data.wind.speed} km/h</p>
      `;
    })
    .catch(error => console.error("Erro:", error));
}

