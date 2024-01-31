function displayTemperature(response) {
  let city = response.data.city;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city;

  let temperature = Math.round(response.data.temperature.current);
  let currentTemp = document.querySelector(".current-temperature-value");
  currentTemp.innerHTML = temperature;

  let humidity = response.data.temperature.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = humidity;

  let windSpeed = response.data.wind.speed;
  let currentWindSpeed = document.querySelector("#wind-speed");
  currentWindSpeed.innerHTML = windSpeed;

  let description = response.data.condition.description;
  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = description;

  let iconUrl = response.data.condition.icon_url;
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${iconUrl}" class="current-temperature-icon" />`;

  // Update local time
  let timezone = response.data.timezone;
  displayLocalTime(timezone);
}

function displayLocalTime(timezone) {
  let currentDate = new Date();
  let options = {
    timeZone: timezone,
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  };
  let localTimeString = currentDate.toLocaleString("en-US", options);
  document.querySelector("#date-now").textContent = localTimeString;
}

function showWeatherInfoForCity(cityName) {
  let apiKey = "00a3d0oe3b36e11ff9bf2a3fd4b8t806";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function showNewCityInfo(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#search-input");
  let cityName = inputCity.value.trim();
  showWeatherInfoForCity(cityName);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", showNewCityInfo);

showWeatherInfoForCity("Barcelona");
