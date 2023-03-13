const express = require("express");
const https = require("https");
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
	https.get("https://api.waifu.pics/nsfw/blowjob", function (response) {
		response.on("data", function (data) {
			answer = JSON.parse(data).url;
			res.send(
				"<h1>Hi</h1><img style='width: 30rem' src=" + answer + ">"
			);
		});
	});
});

app.listen(port, () => {
	console.log("Server started successfully");
});
