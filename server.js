const express = require("express");
const connectDB = require("./config/db");
const workoutRoutes = require("./routes/workoutRoutes");

// connectDB();

const app = express();

app.use(express.json());

// app.use("/api/workouts", workoutRoutes);
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
