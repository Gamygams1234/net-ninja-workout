const express = require("express");
const Workout = require("../models/workoutModel");
const {createWorkout, getWorkout, getWorkouts} = require("../controllers/workoutController"); 

// this will bring up an instance of the router class
const router = express.Router()


router.get("/", getWorkouts)

// the : will reill add a parameter
router.get("/:id", getWorkout)


router.post("/", createWorkout)


router.delete("/:id", (req, res)=>{
    res.json({mssg:"Delete a workout"});

})


router.patch("/:id", (req, res)=>{
    res.json({mssg:"Update a workout"});

})

module.exports = router