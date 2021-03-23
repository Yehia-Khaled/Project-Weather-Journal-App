/* Global Variables */
//setup API credentials from OpenWeatherMap website
const apikey='&appid=78109ed9196112b0a5be3e40a1432a19';
const baseurl='https://api.openweathermap.org/data/2.5/weather?zip='
const unit='&units=metric'
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();