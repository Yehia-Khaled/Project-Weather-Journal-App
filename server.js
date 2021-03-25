// Setup empty JS object to act as endpoint for all routes
const projectData = [];

// Require Express to run server and routes
const express= require ('express');
// Start up an instance of app
const app=express();
// Dependencies
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port=3030
const server=app.listen(port,listening)
function listening()
{
console.log(`Server is running on port ${port}`);
}

// Setup Server

//TODO post data function
app.post('/projectdate',(req,res)=>{
    data = {
        Temperature: req.body.Temperature,
        Date: req.body.Date,
        userinput: req.body.Userrespones
    }
    projectData.push(data);

})
// TODO get data function
app.get('/all',(req,res)=>{
    res.send(projectData)
    console.log(projectData)
})

