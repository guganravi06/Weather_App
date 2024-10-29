const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "ba076399e1ae9a59f90237e83301713e";

const searchbox = document.querySelector(".search-input");
const searchbtn= document.querySelector(".search-btn");
const weatherImg = document.querySelector(".weather-pic img");
const appName = document.getElementsByClassName("app-name");

async function getWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();

        document.querySelector(".location").innerHTML = data.name;
        document.querySelector(".temprature").innerHTML=
        Math.round((data.main.temp)-273.15)+"°C";
        document.querySelector(".humidity-value").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind-speed").innerHTML=data.wind.speed+"km/h";

        if(data.weather[0].main == "Rain"){
            weatherImg.src='images/rain.png';
        }else if(data.weather[0].main == "Snow"){
            weatherImg.src='images/snow.png';
        }else if(data.weather[0].main == "Clouds"){
            weatherImg.src='images/clouds.png';
        }else if(data.weather[0].main == "Clear"){
            weatherImg.src='images/clear.png';
        }else if(data.weather[0].main == "Drizzle"){
            weatherImg.src='images/drizzle.png';
        }else if(data.weather[0].main == "Mist"){
            weatherImg.src='images/mist.png';
        }else{
            weatherImg.src='images/unknown.png';
        }

        document.querySelector(".app-name").style.display="none";
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

    }
}
searchbtn.addEventListener("click",() =>{
    getWeather(searchbox.value);
});