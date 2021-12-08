const path = require('path');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const getCoordinates = require('./getCoordinates');
const getImage = require('./getImage');
const getWeather = require('./getWeather');
const tripDaysPrediction = require('./predictWeather');


let data = {};


app.post('/newtrip', async (req, res) => {

    const weatherAPI = process.env.WEATHERBIT_APIKEY;
    const destination = req.body.city;
    console.log('Data posted...');
    console.log(destination);

    let weatherURl;
  
    try{

        const response = await getCoordinates(destination);
        
        
        if(!response.code){
            console.log(response);
            if(!req.body.startDate){
                weatherURl = `https://api.weatherbit.io/v2.0/current?lat=${response.lat}&lon=${response.lon}&key=${weatherAPI}&units=I`;
            } else{
                weatherURl = tripDaysPrediction(req.body.startDate, response.lat, response.lon, weatherAPI);
            }
    
            const weatherData = await getWeather(weatherURl);
            const pixabayPhoto = await getImage(destination);
    
            data = {
                ...req.body,
                ...weatherData,
                ...pixabayPhoto
            }
            res.send(data);
        } else{
            console.log(response);
            data = {...response};
            res.send(data);
        }

    }catch(err){
        res.send(err);
    }
});

app.get('/getData', (req,res) => {
    console.log('Getting data...');
    res.send(data);
});


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to port ${port}...`));