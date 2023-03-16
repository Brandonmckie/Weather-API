const apiKey = "faca263bd038f6ebfa13b8f798358a87";

let wetherUrl =
  "http://api.openweathermap.org/data/2.5/forecast?q=" +
  cityInput +
  "&appid=faca263bd038f6ebfa13b8f798358a87&units=imperial";
let date = document.getElementById("date");
let tempature = document.getElementById("tempature");
let humdity = document.getElementById("humdity");
let windSpeed = document.getElementById("windSpeed");
let weatherIcon = document.getElementById("weatherIcon");
let cardDiv = document.getElementById("cards");

function addToList(c) {
  var listEl = $("<li>" + c.toUpperCase() + "</li>");
  $(listEl).attr("class", "list-group-item");
  $(listEl).attr("data-value", c.toUpperCase());
  $(".list-group").append(listEl);
}

function getInfo() {
  let newName = document.getElementById("cityInput");
  let cityName = document.getElementById("cityName");
  cityName.innerHTML = newName.value.toUpperCase();

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      newName.value +
      "&appid=32ba0bfed592484379e51106cef3f204&units=imperial"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let lat = data.city.coord.lat;
      let lon = data.city.coord.lon;
      let iconFC = data.list[0].weather[0].icon;

      console.log(data.list[0].main.temp);
      tempature.innerHTML = `Temp : ${data.list[0].main.temp}`;
      windSpeed.innerHTML = `Wind Speed: ${data.list[0].wind.speed} mph`;
      humdity.innerHTML = `Humdity: ${data.list[0].main.humidity}%`;
      date.innerHTML = `(${data.list[0].dt_txt})`;
      weatherIcon.src =
        "http://openweathermap.org/img/wn/" + iconFC + "@2x.png";
      // for (let i = 5; i < 40; i += 8) {
      //   let dateText = data.list[i].dt_txt;
      //   let shortDate = dateText.split(" ");
      //   let date = shortDate[0];
      //   let iconFc = data.list[i].data[0].icon;
      //   let cardHum = data.list[i].main.humdity;
      // }
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=32ba0bfed592484379e51106cef3f204&units=imperial`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < 5; i++) {
            let newDiv = document.createElement("div");
            newDiv.className = "card";

            let cardDate = document.createElement("h2");
            cardDate.innerHTML = data.list[i].dt_txt;

            let cardTemp = document.createElement("p");
            cardTemp.innerHTML = `Temp : ${data.list[i].main.temp}`;

            let cardHumdity = document.createElement("p");
            cardHumdity.innerHTML = `Humdity: ${data.list[i].main.humidity}%`;

            let newWeatherIcon = document.createElement("img");
            let iconW = data.list[i].weather[0].icon;
            newWeatherIcon.src =
              "http://openweathermap.org/img/wn/" + iconW + "@2x.png";

            cardDiv.append(newDiv);
            newDiv.append(cardDate);
            newDiv.append(cardTemp);
            newDiv.append(cardHumdity);
            newDiv.append(newWeatherIcon);
          }
        });
    });
}
