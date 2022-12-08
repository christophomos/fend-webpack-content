const COUNTRY_CODE = 'us';
const OPEN_WEATHER_API_KEY = '9b246284975098f082c47160b6db6921&units=metric';

const getWeather = async (zipCode) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${COUNTRY_CODE}&appid=${OPEN_WEATHER_API_KEY}`;
    console.log(url);

    const response = await fetch(url);

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

function handleWeatherClick(event) {
    let weatherDiv = document.querySelector('#weather')
    getWeather("90210")
        .then((data) => weatherDiv.textContent = data.name)
}

export {handleWeatherClick};