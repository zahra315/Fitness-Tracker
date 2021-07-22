const path = require("path");
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", (re, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", (re, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
