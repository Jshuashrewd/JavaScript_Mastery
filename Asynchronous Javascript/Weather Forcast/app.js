//7d27dc0d3af6618bf33cd6492e11d29c


const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDay() -1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day} ${year}`;

const app = document.getElementById('app');

// Add event listener for Enter key on search input
const searchInput = document.getElementById('searchBarInput');
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});

const getWeather = async () => {
    try {
        const cityName = document.getElementById('searchBarInput').value;
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7d27dc0d3af6618bf33cd6492e11d29c&units=metric`, {
            headers: {
                Accept: 'application/json'
            }
        });
        const weatherData = await weatherDataFetch.json();
        console.log(weatherData);

        city.innerHTML = `${weatherData.name}`;

        description.innerHTML = `${weatherData.weather[0].description}`;

        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Weather Icon">`;

        temp.innerHTML = `${Math.round(weatherData.main.temp)}°C`;

        tempMax.innerHTML = `${weatherData.main.temp_max}°C`;

        tempMin.innerHTML = `${weatherData.main.temp_min}°C`;

    } catch (error) {
        console.log(error);
    }
}