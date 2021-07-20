const Workout = require("../models/workout");

module.exports = (router) => {
  router.get("/api/workouts", (req, res) => {
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

  router.put("/api/workouts/:id", (req, res) => {
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

  router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
      .then((workoutDB) => {
        res.json(workoutDB);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
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
