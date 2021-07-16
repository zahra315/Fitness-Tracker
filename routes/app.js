const path = require("path");
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.senFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", (re, res) => {
    res.senFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/state", (re, res) => {
    res.senFile(path.join(__dirname, "../public/stats.html"));
  });
};
