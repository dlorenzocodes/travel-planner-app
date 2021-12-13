const axios = require('axios');



async function getWeather(weatherURl) {
    try{
        const weather = await axios.get(weatherURl);
        const weatherData = weather.data.data[0];
        return {
            temp: weatherData.temp,
            app_temp: weatherData.app_temp,
            app_max_temp: weatherData.app_max_temp,
            weather_desc: weatherData.weather.description,
        }
    }catch(err){
        throw new Error(`Error has occured:${err}`);
    } 
};

module.exports = getWeather;

