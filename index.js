// Variables

var apiKey = "bd331142b3d334c79bd255a7fd40b685";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchInput = document.querySelector('.search input');
var searchBtn = document.querySelector('.search button');

var weatherIcon = document.querySelector('.weather-icon');

async function weatherCheck(city){
    var response= await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }else{
         var data = await response.json();

    console.log(data);

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr';

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png";
    }

    document.querySelector('.error').style.display = "none";
    document.querySelector('.weather').style.display = "block";
    }

    var data = await response.json();

    console.log(data);

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr';

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }

}

searchBtn.addEventListener('click', function(){
    weatherCheck(searchInput.value);
})

