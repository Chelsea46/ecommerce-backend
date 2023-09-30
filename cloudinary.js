const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET 
});

const images = [
   
];

(async function run(){
    for ( const image of images ){
        try {
            const result = await cloudinary.uploader.upload(image);
            console.log(result.secure_url);
            
        } catch (error) {
           console.log(error) 
        }
    }
})();
