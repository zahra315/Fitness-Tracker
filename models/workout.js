const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;
