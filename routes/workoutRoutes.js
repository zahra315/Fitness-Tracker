const Workout = require("../models/workout");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((workoutDB) => {
        // console.log(workoutDB);

        workoutDB.forEach((workout) => {
          var total = 0;
          workout.exercises.forEach((event) => {
            total += event.duration;
          });
          workout.totalDuration = total;
        });
        res.json(workoutDB);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body },
      },
      { new: true, runValidators: true }
    )
      .then((workoutDB) => {
        res.json(workoutDB);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
      .then((workoutDB) => {
        res.json(workoutDB);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((workoutDB) => {
        // console.log(workoutDB);

        res.json(workoutDB);
      })
      .catch((error) => {
        res.json(error);
      });
  });
};
