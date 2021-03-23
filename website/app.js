/* Global Variables */
//setup API credentials from OpenWeatherMap website
const apikey='&appid=78109ed9196112b0a5be3e40a1432a19';
const baseurladdress='https://api.openweathermap.org/data/2.5/weather?zip=';
const unit='&units=metric';
/*//Test URL
alert(baseurladdress+12345+unit+apikey);*/
/* End Global Variables */

//create event listener when click in generate 
document.getElementById('generate').addEventListener('click',performaction)
//create perform action function "called with event listener"
function performaction()
{
    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    //get zipcode value when user click generate
    const zipcode=document.getElementById('zip').value;
    //get feelings value when user click generate
    const feelings=document.getElementById('feelings').value;
    //create function to get zipcode with parameters (
    getzipcode(baseurladdress,zipcode,unit,apikey)
}
/* Function to GET web api data temp */
const getzipcode= async (baseurl,zipcode,unit,apikey)=>
{
    const res=await fetch(baseurl+zipcode+unit+apikey)
    try
    {
        const data=await res.json();// convert data to json
        console.log(data);
        if (data.cod===200)
        return data.main.temp;
        else
            alert("error")
    }catch (error){
        console.log("error",error)
        //appropriately handle error
    }

}
