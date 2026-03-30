async function fetchWeather() {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,weathercode&timezone=auto&forecast_days=3`;
        const response = await fetch(url);
        const data = await response.json();

        function getWeather(code) {
            if (code === 0) return { text: "Klart", icon: "☀️" };
            if (code <= 3) return { text: "Molnigt", icon: "⛅" };
            if (code <= 67) return { text: "Regn", icon: "🌧️" };
            if (code <= 77) return { text: "Snö", icon: "🌨️" };
            if (code <= 82) return { text: "Regnskurar", icon: "🌦️" };
            return { text: "Åska", icon: "⛈️" };
        }

        const days = ["Idag", "Imorgon", "Övermorgon"];

        const ul = document.getElementById("weather-list");
        ul.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            const temp = Math.round(data.daily.temperature_2m_max[i]);
            const weather = getWeather(data.daily.weathercode[i]);

            ul.innerHTML += `
                    <li>
                        <span class="weather-icon">${weather.icon}</span>
                        <div class="weather-info">
                            <strong>${days[i]}</strong>
                            <div class="weather-details">
                                <span class="temp">${temp}°C</span>
                                <span class="desc">${weather.text}</span>
                            </div>
                        </div>
                    </li>
                `;
        }
    });
}

fetchWeather();
