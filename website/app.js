/* Global Variables */
//setup API credentials from OpenWeatherMap website
const apikey='&appid=78109ed9196112b0a5be3e40a1432a19';
const baseurladdress='https://api.openweathermap.org/data/2.5/weather?zip=';
const unit='&units=metric';
/*//TODO Test URL
alert(baseurladdress+12345+unit+apikey);*/
/* End Global Variables */
/* TODO Helper function */
//TODO async PostData function
const postData= async(url='',data={})=>{
    const response =await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(data),//body data type must match"content-type" header
    });
    try{
        const newData=await response.json();
        return newData
    }catch(error){
        console.log("error",error);
    }
}
//create event listener when click in generate
document.getElementById('generate').addEventListener('click',performaction)
//TODO perform action function "called with event listener"
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
    getuserdata (baseurladdress,zipcode,unit,apikey,feelings,newDate)

}
/* TODO Function to GET web api data temp */
const getuserdata= async (baseurladdress,zipcode,unit,apikey,feelings,newDate)=> {

    fetch(`${baseurladdress}${zipcode}${unit}${apikey}`).then(function (data) {
        return data.json();//convert data to json

    }).then((Data)=>{
        //test temp
        console.log(Data.main.temp);
        //Test data ,feelings,date
        console.log(Data);
        console.log(feelings)
        console.log(newDate);

        //postData
        postData('/projectdate', {Temperature: Data.main.temp, Date: newDate, Userrespones: feelings});
    }).then(
        //TODO promise update UI elements
        UpdateUI()
    )
}///TODO Update UI async Function
const UpdateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        console.log(allData)
        document.getElementById('date').innerHTML = allData[0].Date;
        document.getElementById('temp').innerHTML = allData[0].Temperature;
        document.getElementById('content').innerHTML = allData[0].Userrespones;

    }catch(error){
        console.log("error", error);
    }
}






//code archive
/* try {
    const data = await res.json();// convert data to json
    if (data.cod === 200)
        //return data.main.temp;
        // console data temperature
        console.log(data.main.temp);
} catch (error) {
    console.log("error", error)
    //appropriately handle error
    }
    // TODO-Async-POST
const postData= async(url='',data={})=>{
    const response =await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(data),//body data type must match"content-type" header
    });
    try{
        const newData=await response.json();
        return newData
    }catch(error){
        console.log("error",error);
    }
}
function postGet(){
    postData('/projectdata',{fav:'lion'})
        .then(function(data){
            getzipcode('/all')
        })
}
postGet()*/
