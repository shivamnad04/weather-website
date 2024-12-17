
const apiKey = "8090888fee810a2643db1a53bb2b9e2f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    const response = await fetch(apiUrl  + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/Rain.png";
        }
        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/Drizzle.png";
        }
        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/Mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

});

function handleKeydown(event){
    if (event.key==='Enter'){
        checkWeather(searchBox.value);
    }
}