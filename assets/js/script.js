

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
        })
};