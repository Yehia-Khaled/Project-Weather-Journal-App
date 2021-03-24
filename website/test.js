/* Global Variables */
//setup API credentials from OpenWeatherMap website
const apikey='&appid=78109ed9196112b0a5be3e40a1432a19';
const baseurladdress='https://api.openweathermap.org/data/2.5/weather?zip=';
const unit='&units=metric';
//make zipcode global ,i well get value it when click on generate
const zipcode=document.getElementById('zip');
//make feeling global ,i well get value it when click on generate
const feeling=document.getElementById('feelings').value;
/*//TODO Test URL
alert(baseurladdress+12345+unit+apikey);*/
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
//create event listener when click in generate
document.getElementById('generate').addEventListener('click',performaction)
//TODO perform action function "called with event listener"
function performaction()
{
    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
    //create function to get zipcode with parameters (
    /*
        getuserdata (baseurladdress,zipcode.value,unit,apikey,feeling.value,newDate)
    */

}
/* TODO Function to GET web api data temp */
const getuserdata= async (baseurladdress,zipcode,unit,apikey,feeling,newDate)=> {

    fetch(`${baseurladdress}${zipcode}${unit}${apikey}`).then(function (data) {
        return data.json();//convert data to json
        //Test data ,feelings,date,temp
        console.log(feeling)
        console.log(newDate);
    }).then((Data)=>{
        //Test data ,feelings,date,temp
        console.log(Data);
        console.log(feeling)
        console.log(newDate);

        //postData
        postData('/projectdate', {Temperature: Data.main.temp, Date: newDate, Userrespones: feeling});
    }).then(
        //TODO promise update UI elements
        UpdateUI()
    )
}///TODO Update UI async Function
const UpdateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        const date =allData[0].Date
        const temperature=allData[0].Temperature;
        const response=allData[0].Userrespones
        if (temperature>-20 && temperature<10 )
            document.getElementById('tips').textContent ="wire your caught it's very cold" ;
        else if(temperature>10 && temperature<25)
            document.getElementById('tips').textContent ="wire your caught it's  cold" ;
        else if(temperature>25 && temperature<37)
            document.getElementById('tips').textContent ="Enjoy your time it's sunny" ;
        else if(temperature>37 )
            document.getElementById('tips').textContent ="it's very hot be careful" ;

        else if(temperature>37 )
            document.getElementById('tips').textContent ="Be careful" ;
        console.log(allData)
        document.getElementById('date').innerHTML =date ;
        document.getElementById('temp').innerHTML =temperature;
        document.getElementById('content').innerHTML =response ;

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
