const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();


const geoURl = 'http://api.geonames.org/searchJSON?'
const username = process.env.GEONAMES_USERNAME;

async function getCoordinates(destination){
    try{
        const response = await axios.get(`${geoURl}q=${destination}&maxRows=1&username=${username}`);
        const geoData = response.data.geonames;
        return{
            lat: geoData[0].lat,
            lon: geoData[0].lng
        };
    }catch(err){
        throw new Error(`${err}`);
    }
   
};

module.exports = getCoordinates;