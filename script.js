document.addEventListener('DOMContentLoaded', function () {

    const searchButton = document.getElementById('search-btn');
    const cityName = document.getElementById('input-field');
    const temperatureLabel = document.getElementById('temperature-label');
    const humidityLabel = document.getElementById('humidity-label');
    const conditionLabel = document.getElementById('condition-label');

    
    function ValidateCityName(city) {
        if (city.trim() === "") {
            alert("City cannot be empty");
            return false;
        }
        const cityRegex = /^[A-Za-zÀ-ÿ\s'.-]{2,50}$/;
        const ismatching = cityRegex.test(city);
        if (!ismatching) {
            alert('City name is invalid');
        }
        return ismatching;
    }

    
    async function fetchCityWeather(city) {
        const apiKey = "9e2fe6f99f82a979a69d2182408ab967";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Unable to fetch weather details");
            }

            const data = await response.json();
            console.log("Weather Fetch:", data);

            temperatureLabel.textContent = ` ${Math.round(data.main.temp)}°C`;
            humidityLabel.textContent = `${data.main.humidity}%`;
            conditionLabel.textContent = `${data.weather[0].description}`;
        }
        catch (error) {
            alert("Error fetching weather data! Please check the city name.");
            console.error(error);
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    searchButton.addEventListener('click', function () {
        const city = cityName.value;
        if (ValidateCityName(city)) {
            fetchCityWeather(city);
        }
    });
    cityName.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});