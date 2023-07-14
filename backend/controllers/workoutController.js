
const mongoose = require("mongoose");
const Workout = require("../models/workoutModel");

// get all workout
const getWorkouts = async (req, res) => {
  // this is finding all of the workouts by descending order
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single workout
const getWorkout = async (req, res) => {
  // this is finding all of the workouts by descending order
  const { id } = req.params;
//   checking to see if the Id is valid

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout"});

  }

  const workout = await Workout.findById(id);

  if(!workout){
    return res.status(404).json({error: "No such workout"});
  }

  res.status(200).json(workout);


    



};

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  delete a workout

// update a workout

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout
};
