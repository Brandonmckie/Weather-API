let searchBtn = document.getElementById("searchBtn");
const searchedCities = document.getElementById("searchedCitys");

function getCity() {
  return localStorage.getItem("cityName");
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let cityInput = document.getElementById("cityInput").value;
  let btn = document.createElement("a");
  let url =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityInput +
    "&appid=faca263bd038f6ebfa13b8f798358a87&units=imperial";

  localStorage.setItem("cityName", cityInput);

  searchedCities.append(btn);

  fetch(url).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });

  let newUrl =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    data.coord.lat +
    "&lon=" +
    data.coord.lon +
    "&appid=faca263bd038f6ebfa13b8f798358a87&units=imperial";

  fetch(newUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (response) {
        console.log(response);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
});
