// Setup empty JS object to act as endpoint for all routes
  projectData = {};

// Require Express to run server and routes
const express= require ('express');
// Start up an instance of app
const app=express();
const importData=require("./package.json")
// Dependencies
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));*/

const port = process.env.PORT || 3000;
const server=app.listen(port, listening)
function listening()
{
console.log(`Server is running on port http://localhost:${port}`);
}
//test server
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/test",(req,res)=>{
    res.send(importData)
})
// Setup Server
/*

//TODO post data function
app.post('/projectdate',(req,res)=>{
    let data= req.body;
    console.log("Server side data",data)
    //get value for object project data
    projectData["Temperature"]= data.Temperature;
    projectData["Date"]= data.Date;
    projectData["userinput"]= data.Userrespones;
    //TODO send data to post
    res.send(projectData)

    console.log("Data after get value  ",projectData)

})
// TODO get data function
app.get('/all',(req,res)=>{
    res.send(projectData)
    console.log("from get method",projectData)
})

*/
