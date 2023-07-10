// this is extablished using the dotenv in node
require("dotenv").config()

// this is using our express depencency
const express = require("express");

// creates an express app
const app = express()

// adding a middleware
// function that runs in between requests
app.use((req, res, next)=>{

    console.log(req.path, req.method);
    // lets the next method run
    next();
})

// listen for requersts

app.get("/", (req, res)=>{
    res.json({msg: "Hello World"})
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on ${process.env.PORT} right nonw`)
});


