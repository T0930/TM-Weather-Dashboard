

var sButton = document.getElementById('sButton');
sButton.addEventListener('click', function(event){
    event.preventDefault();
    var city = document.getElementById('inlineFormInputName').value;
    getWeather(city);
})


var APIkey = "f70f1687f6e609e40071244c476b5c5f";

// var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey;



function getWeather(cityName) {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIkey + "&units=imperial";
    console.log(url);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var today= new Date();
            var lat = data.coord.lat
            var lon = data.coord.lon
            var forcast = `<div class="city">${cityName}</div>
            <div class="day">Date ${today}</div>
            <div class="temp">Description - <p>${data.weather[0].description}</p></div>
            <div class="temp">Temp - ${data.main.temp}; F <span><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'></span></div>
            <div class="wind">Wind - ${data.wind.speed}</div>
            <div class="humidity">Humidity - ${data.main.humidity}</div>`
            document.getElementById('currentDay').innerHTML=forcast;
            useWeather(lat, lon);
        })
};

function useWeather(lat, lon) {
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`
    console.log(url);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var daily = data.daily
            var fiveDay = '<h2>5 Day Forcast</h2>'
            for (let i=1; i<6; i++){
                fiveDay += `<div class="weather-day">
                <div class="day">Date</div>
                <div class="temp">Temp - ${daily[i].temp.max}; F<span><img src='https://openweathermap.org/img/wn/${daily[i].weather[0].icon}@2x.png'></span></div>
                <div class="wind">Wind - ${daily[i].wind_speed}</div>
                <div class="humidity">Humidity - ${daily[i].humidity}</div>
                <div class="uvIndex">UV Index - ${daily[i].uvi}</div>
              </div>`
            }
            document.getElementById('weatherId').innerHTML = fiveDay;
            // var today= 'new date'()
            // var lat = data.coord.lat
            // var lon = data.coord.lon
            // var forcast = `<div class="city">${cityName}</div>
            // <div class="day">Date ${today}</div>
            // <div class="temp">Temp - ${data.main.temp}; F</div>
            // <div class="wind">Wind - ${data.wind.speed}</div>
            // <div class="humidity">Humidity - ${data.main.humidity}</div>`
            // document.getElementById('currentDay').innerHTML=forcast;
        })
}