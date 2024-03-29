const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const pixabayAPI = process.env.PIXABAY_APIKEY;
const baseURl = 'https://pixabay.com/api/?';

// returns image of destination if found, otherwise returns empty

async function getImage(destination){
   try{
      const image = await axios.get(`${baseURl}key=${pixabayAPI}&q=${destination}&category=places&orientation=horizontal&image_type=photo`);
      const imageData = image.data.hits[0] || '';
      return {
         img: imageData.webformatURL || ''
      }
   }catch(err){
      throw new Error(`Error: ${err}`);
   }  
};

module.exports = getImage;