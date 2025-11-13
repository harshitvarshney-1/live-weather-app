<h1 align="center">⛅ Real-Time Weather App</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20With-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Style-CSS3-264de4?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/API-OpenWeatherMap-blue?style=for-the-badge&logo=openweathermap" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

<p align="center">
  A modern and responsive web app that displays <b>real-time weather data</b> fetched from the <b>OpenWeatherMap API</b>.  
  Search any city to view its <b>temperature, humidity,</b> and <b>current sky condition</b> — all in a clean, storm-themed interface ⚡
</p>

---

## 🌟 Features

✨ Fetches real-time weather data from the OpenWeatherMap API  
✨ City name validation for better accuracy  
✨ Displays current <b>temperature</b>, <b>humidity</b>, and <b>sky condition</b>  
✨ Smooth UI with dark storm-inspired background  
✨ Responsive and minimal design  
✨ Handles invalid input and API errors gracefully  

---

## 🧠 Tech Stack

| Technology | Usage |
|-------------|--------|
| **HTML5** | Structure of the web page |
| **CSS3** | Styling, layout, and background design |
| **JavaScript (Vanilla)** | API fetching, validation, and dynamic updates |
| **OpenWeatherMap API** | Real-time weather data source |

---

## ⚙️ Working Principle

1. User enters a **city name** in the input field  
2. Input is validated using a regex pattern  
3. The app sends an API request to **OpenWeatherMap**  
4. On successful response, data such as temperature, humidity, and weather condition are extracted  
5. The values are dynamically displayed on the UI in real-time  

---

## 🧾 Core JavaScript Logic

```js
async function fetchCityWeather(city) {
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    searchButton.textContent = "Searching...";
    searchButton.disabled = true;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Unable to fetch weather details");

    const data = await response.json();

    temperatureLabel.textContent = `${Math.round(data.main.temp)}°C`;
    humidityLabel.textContent = `${data.main.humidity}%`;
    conditionLabel.textContent = `${data.weather[0].description}`;
  } catch (error) {
    alert("Error fetching weather data! Please check the city name.");
  } finally {
    searchButton.textContent = "Search";
    searchButton.disabled = false;
  }
}

```

⭐ Support & Contributions
If you like this project, please give it a ⭐ on GitHub — it helps me stay motivated to create more open-source projects!
Pull requests, ideas, and feature suggestions are always welcome 💡

<p align="center">Built with ❤️ by <b>Harshit Varshney</b></p>