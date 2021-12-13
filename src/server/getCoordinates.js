const axios = require('axios');
const dotenv = require('dotenv');
const { response } = require('express');
dotenv.config();


const geoURl = 'http://api.geonames.org/searchJSON?'
const username = process.env.GEONAMES_USERNAME;


// returns coordinates if a vaild destination is entered or
// retuns an object with error message for bad request

async function getCoordinates(destination){
    try{
        const response = await axios.get(`${geoURl}q=${destination}&maxRows=1&username=${username}`);
        const geoData = response.data.geonames;
        
        if(geoData.length != 0){
            return{
                lat: geoData[0].lat,
                lon: geoData[0].lng
            };
        } else{
            let code = (typeof response.response === 'undefined') ? 400 : response.response.status;
            let message = response.data.error || 'Invalid city. Please provide a valid city name!';
            return {
                code: code ,
                message: message
            }
        }

    }catch(err){
        throw new Error(`Error has occured:${err}`);
    }
   
};

module.exports = getCoordinates;