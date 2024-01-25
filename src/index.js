function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let nowDate = `${currentDay} ${currentHour}:${currentMinutes}`;
  return nowDate;
}

let time = document.querySelector("#date-now");
time.innerHTML = formatDate(new Date());

function displayTemperature(response) {
  let city = response.data.city;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city;

  let temperature = Math.round(response.data.temperature.current);
  let currentTemp = document.querySelector(".current-temperature-value");
  currentTemp.innerHTML = temperature;
}

function showNewCityInfo(event) {
  event.preventDefault();
  let newCityname = "Paris";
  let inputCity = document.querySelector("#search-input");
  newCityname = inputCity.value.trim();

  let apiKey = "00a3d0oe3b36e11ff9bf2a3fd4b8t806";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${newCityname}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", showNewCityInfo);
