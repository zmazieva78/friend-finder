var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
  
	app.get("/survey2", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey2.html"));
	});

	app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/error.html"));
	});

};
  