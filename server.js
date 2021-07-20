require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

connectDB();

// require("./routes/app")(app);
// require("./routes/workoutRoutes")(app);
app.use(require("./routes/app"));
app.use(require("./routes/workoutRoutes"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
