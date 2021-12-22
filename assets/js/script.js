


function displaySearch(){
var storageOutput = document.getElementById('lsOutput');
var searchData = JSON.parse(localStorage.getItem("location")) || []
var htext = `<h3>Previous Search</h3><select name="city" id="city">`

{/* <option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="mercedes">Mercedes</option>
<option value="audi">Audi</option>
</select>` */}
for (let i = 0; i < searchData.length; i++) {
    htext += `<option value="${searchData[i]}">${searchData[i]}</option>`
}
    htext += `</select>`
    storageOutput.innerHTML = htext
}


displaySearch();

var sButton = document.getElementById('sButton');
sButton.addEventListener('click', function (event) {
    event.preventDefault();
    var city = document.getElementById('inlineFormInputName').value;
    getWeather(city);
})


var APIkey = "f70f1687f6e609e40071244c476b5c5f";


var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function () {
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});
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
            // var today= new Date();
            var lat = data.coord.lat
            var lon = data.coord.lon
<<<<<<< HEAD
            var searchData = JSON.parse(localStorage.getItem("location")) || []
            searchData.push(cityName);
            localStorage.setItem('location', JSON.stringify(searchData))
=======
>>>>>>> c04e6c0a199d3f0d209af96438b29b72e118eb9c
            // var forcast = `<div class="city">${cityName}</div>
            // <div class="day">Date ${today}</div>
            // <div><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'></div>
            // <div class="temp">Temp:  ${data.main.temp}&#176;F </div>
            // <div class="wind">Wind:  ${data.wind.speed} MPH</div>
            // <div class="humidity">Humidity:  ${data.main.humidity}%</div>`
            // document.getElementById('currentDay').innerHTML=forcast;
            useWeather(lat, lon, cityName);
            // getUV(lat, lon);
        })
};



function useWeather(lat, lon, cityName) {
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`
    console.log(url);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var today = new Date();
            var daily = data.daily
            var UVin = data.daily[0].uvi
            var fiveDay = '<h2>5 Day Forcast</h2>'
            var forcast = `<div class="city">${cityName}</div>
            <div class="day">Date ${today}</div>
            <div><img src='https://openweathermap.org/img/wn/${daily[0].weather[0].icon}@2x.png'></div>
            <div class="temp">Temp:  ${daily[0].temp.max}&#176;F </div>
            <div class="wind">Wind:  ${daily[0].wind_speed} MPH</div>
            <div class="humidity">Humidity:  ${daily[0].humidity}%</div>
<<<<<<< HEAD
            <div id="UV" class="uvIndex">UV Index:  ${UVin}</div>`
=======
            <div class="uvIndex">UV Index:  ${UVin}</div>`
>>>>>>> c04e6c0a199d3f0d209af96438b29b72e118eb9c



            document.getElementById('currentDay').innerHTML = forcast;
            for (let i = 1; i < 6; i++) {
                var dt = new Date(data.daily[i].dt * 1000);
                fiveDay += `<div class="weather-day">
                <div class="day">${dt.toDateString()}</div>
                <div> <img src='https://openweathermap.org/img/wn/${daily[i].weather[0].icon}@2x.png'></div>
                <div class="temp">Temp:  ${daily[i].temp.max}&#176;F</div>
                <div class="wind">Wind:  ${daily[i].wind_speed} MPH</div>
                <div class="humidity">Humidity:  ${daily[i].humidity}%</div>
              </div>`
            }
            document.getElementById('weatherId').innerHTML = fiveDay;
            // getUV(UVin);
            UVcheck(UVin);
        })

};

function UVcheck(UVin) {
    console.log(UVin);
<<<<<<< HEAD
    var change = document.getElementById('UV');
    if (UVin > "6") {

        console.log('UV Index Severe')
        change.classList.add('uvIndexBad');
    } else if (UVin > "2" && UVin < "6") {
        
        console.log('UV Index Moderate')
        change.classList.add('uvIndexOk');
    } else {
        
        console.log('UV Index Good')
        change.classList.add('uvIndexGood');
=======
    // var change = document.getElementById('UV');
    if (UVin > "6") {
        // $('#UV').addClass('uvIndexBad');
        console.log('UV Index Severe')
        // change.classList.add('uvIndexBad');
    } else if (UVin > "2" && UVin < "6") {
        // $('#UV').addClass('uvIndexOk');
        console.log('UV Index Moderate')
        // change.classList.add('uvIndexOk');
    } else {
        // $('#UV').addClass('uvIndexGood');
        console.log('UV Index Good')
        // change.classList.add('uvIndexGood');
>>>>>>> c04e6c0a199d3f0d209af96438b29b72e118eb9c
    };

}

// function getUV(lat, lon, UVin) {
//     var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`
//     console.log(url);
//     fetch(url)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         var uv = `<div class="uvIndex">UV Index: ${UVin}%</div>`
//         document.getElementById('UV').innerHTML = uv;
// })
// };