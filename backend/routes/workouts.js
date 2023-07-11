const express = require("express");

// this will bring up an instance of the router class
const router = express.Router()


router.get("/", (req, res)=>{

    res.json({mssg:"GET all workouts"})
})

// the : will reill add a parameter
router.get("/:id", (req, res)=>{
    res.json({mssg:"GET single workouts"})

})


router.post("/", (req, res)=>{
    res.json({mssg:"POST single workouts"})

})


router.delete("/:id", (req, res)=>{
    res.json({mssg:"Delete a workout"})

})


router.patch("/:id", (req, res)=>{
    res.json({mssg:"Update a workout"})

})

module.exports = router