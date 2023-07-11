const express = require("express");
const Workout = require("../models/workoutModel");

// this will bring up an instance of the router class
const router = express.Router()


router.get("/", (req, res)=>{

    res.json({mssg:"GET all workouts"})
})

// the : will reill add a parameter
router.get("/:id", (req, res)=>{
    res.json({mssg:"GET single workouts"});

})


router.post("/", async (req, res)=>{
    const {title, load, reps} = req.body; 

    try{
        const workout = await Workout.create({title,load, reps})
        res.status(200).json(workout);

    } catch (error){
        // the error has a messag on the class
        res.status(400).json({error: error.message})
    }


})


router.delete("/:id", (req, res)=>{
    res.json({mssg:"Delete a workout"});

})


router.patch("/:id", (req, res)=>{
    res.json({mssg:"Update a workout"});

})

module.exports = router