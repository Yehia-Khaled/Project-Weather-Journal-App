/* Global Variables */
//setup API credentials from OpenWeatherMap website
const apikey='&appid=78109ed9196112b0a5be3e40a1432a19';
const baseurl='https://api.openweathermap.org/data/2.5/weather?zip=';
const unit='&units=metric';
//get zipcode value
const zipcode=document.getElementById('zip').value;
//get feelings value
const feelings=document.getElementById('feelings').value;

/* End Global Variables */
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//create event listener when click in generate 
document.getElementById('generate').addEventListener('click',performaction)
//create perform action function
function performaction()
{

    //create function to get zipcode with parameters (
    getzipcode(baseurl,zipcode,unit,apikey)
}
const getzipcode= async (baseurl,zipcode,unit,apikey)=>
{

}