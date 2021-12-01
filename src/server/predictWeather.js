
function tripDaysPrediction(startDate, lat, lon, weatherAPI){
    const date = new Date();
    const currentTime = date.getTime();
    const tripDate = new Date(startDate);
    const tripTime = tripDate.getTime();
    const dayDifference = Math.round((tripTime - currentTime) / (1000 * 3600 * 24));
    console.log(dayDifference);

    if(dayDifference <= 7){
        return `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${weatherAPI}&units=I`;
    } else {
        return `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${weatherAPI}&units=I`;
    }
}

module.exports = tripDaysPrediction;