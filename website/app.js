/* Global Variables */
//setup API credentials from OpenWeatherMap website
const apikey='&appid=78109ed9196112b0a5be3e40a1432a19';
const baseurladdress='https://api.openweathermap.org/data/2.5/weather?zip=';
const unit='&units=metric';

/*//TODO Test URL
alert(baseurladdress+12345+unit+apikey);*/
const zipcode=document.getElementById('zip') ;

//get feelings value when click on generate
const feeling=document.getElementById('feelings') ;

/* End Global Variables */
/* TODO Helper function */
//TODO async PostData function using then and catch function
const postData= async(url='',data={})=>{
    fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(data),//body data type must match"content-type" header
    }).then(function(data){
        return data.json();
    }).catch(error=>console.log(error))

}
//TODO Tips for weather
function tips_for_weather(temp){
    if (temp > -20 && temp < 10)
        document.getElementById('tips').textContent = "wear your caught it's very cold";
    else if (temp > 10 && temp < 25)
        document.getElementById('tips').textContent = "wear your caught it's  cold";
    else if (temp > 25 && temp < 37)
        document.getElementById('tips').textContent = "Enjoy your time it's sunny";
    else if (temp > 37)
        document.getElementById('tips').textContent = "it's very hot be careful";

    else
        document.getElementById('tips').textContent = "Be careful";
}
/* End Helper function */
//create event listener when click in generate
document.getElementById('generate').addEventListener('click',Doaction)
//TODO perform action function "called with event listener"
function Doaction()
{
    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+1+ '.'+ d.getDate()+'.'+ d.getFullYear();

    let zipvalue=zipcode.value;
    let feelingvalue =feeling.value;
    console.log("1 ",zipvalue)
    console.log("1 ",feelingvalue)
    getuserdata (baseurladdress,zipvalue,unit,apikey,feelingvalue,newDate)

}
/* TODO Function to GET web api data temp */
const getuserdata= async (baseurladdress,zipvalue,unit,apikey,feelingvalue,newDate)=> {

    fetch(`${baseurladdress}${zipvalue}${unit}${apikey}`).then(function (data) {
        return data.json();//convert data to json

    }).then((Data)=>{
        //Test data ,feelings,date,temp
        console.log(Data.main.temp);
        console.log(feelingvalue)
        console.log(newDate);

        //postData
        postData('/projectdate', {Temperature: Data.main.temp, Date: newDate, Userrespones: feeling.value});
    }).then(()=>
        //TODO promise update elements
        UpdateElements()
    ).catch(error=>{
        console.log("Error",error)
    })
}

//TODO Update UI async Function
// TODO Async function with method fetch ,then and catch.
const UpdateElements = async () => {
    fetch('/all').then(function (data){
        return data.json()
    }).then(data=>{
            const Date = data.Date;
            const temperature = data.Temperature;
            const response = data.userinput
            //call tips for weather function
            tips_for_weather(temperature)
            // get data on console to test
            console.log(data)
            document.getElementById('date').innerHTML = Date;
            document.getElementById('temp').innerHTML =temperature;
            document.getElementById('content').innerHTML = response;

    }

    ).catch(error => console.log("Error", error))
}
