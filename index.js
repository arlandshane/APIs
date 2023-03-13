const express = require("express");
const https = require("https");
const ejs = require("ejs");
const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
	const apiKey = "edf8b0fa6d19119eabe2d4ba381620ae";
	var movieName = "gargi";
	var year = "2022";
	const api =
		"https://api.themoviedb.org/3/search/movie?query=" +
		movieName +
		"&api_key=" +
		apiKey +
		"&year=" +
		year;
	https.get(api, function (response) {
		response.on("data", function (data) {
			var answer = JSON.parse(data).results[0].overview;
			res.render("home", { overview: answer });
			console.log(answer);
		});
	});
});

// app.post("/", (req, res) => {
// 	res.sendFile(__dirname + "/index.ejs");
// });

app.listen(port, () => {
	console.log("Server started successfully on port " + port);
});
