const path = require("path");
module.exports = (router) => {
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  router.get("/exercise", (re, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", (re, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
