//Read and set any environment variables with the dotenv package
require("dotenv").config();

var axios = require("axios");
//import keys.js file and store it in a variable
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


axios.get("https://www.npmjs.com/package/node-spotify-api").then(function(response) {

console.log(response.data);


});