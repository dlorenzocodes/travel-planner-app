const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const getCoordinates = require('./getCoordinates');
const getImage = require('./getImage');
const getWeather = require('./getWeather');
const tripDaysPrediction = require('./predictWeather');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('dist'));


app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile('dist/index.html')
})

let data = {};


app.post('/newtrip', async (req, res) => {

    const weatherAPI = process.env.WEATHERBIT_APIKEY;
    const destination = req.body.city;
    console.log('Data posted...');

    let weatherURl;
  
    try{

        const coordinates = await getCoordinates(destination);
        const lat = coordinates.lat;
        const lon = coordinates.lon;
       
        if(!req.body.startDate){
            weatherURl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${weatherAPI}&units=I`;
            console.log(weatherURl);
        } else{
            weatherURl = tripDaysPrediction(req.body.startDate, lat, lon, weatherAPI);
            console.log(weatherURl);
        }

        const weatherData = await getWeather(weatherURl);
        const pixabayPhoto = await getImage(destination);

        data = {
            ...req.body,
            ...weatherData,
            ...pixabayPhoto
        }
        console.log(data);
        res.send(data);

    }catch(err){
        console.log(err);
        res.send(err);
    }
});

app.get('/getData', (req,res) => {
    console.log('Getting data...');
    res.send(data);
});


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to port ${port}...`));