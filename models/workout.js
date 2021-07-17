const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String, require: true },
      name: { type: String, require: true },
      duration: { type: Number, require: true },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ],
  totalDuration: { type: Number, default: 0 },
});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;
