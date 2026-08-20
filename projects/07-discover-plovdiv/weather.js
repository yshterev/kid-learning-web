


fetch("https://api.open-meteo.com/v1/forecast?latitude=42.15&longitude=24.75&current_weather=true")
    .then(response => response.json())
    .then(data => {
        document.getElementById("temperature").textContent = data.current_weather.temperature + "°C";
        document.getElementById("temperature").then
        document.getElementById("weatherEmoji").textContent = "☀️";
    })
    .catch(error => {
        console.error("Error:", error);
    });
