// this is extablished using the dotenv in node
require("dotenv").config()

// this is using our express depencency
const express = require("express");

const workoutRoutes = require("./routes/workouts")

// creates an express app
const app = express()

// adding a middleware
// function that runs in between requests

// this will be important if we want to use the body for the request
app.use(express.json())



app.use((req, res, next)=>{

    console.log(req.path, req.method);
    // lets the next method run
    next();
})

// listen for requersts

app.get("/", (req, res)=>{

    res.json({mssg:"Hello"})
})


// we can use the workoute routes
app.use("/api/workouts", workoutRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on ${process.env.PORT} right nonw`)
});


