const express = require("express");
const axios = require("axios");
const ejs = require("ejs");
const { title } = require("process");
const { response } = require("express");
const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

var queryList = [
	"butterfly",
	"dragonfly",
	"ocean",
	"dog",
	"cat",
	"graphics",
	"lavendar",
	"hummingbird",
	"cute",
	"pretty",
	"beautiful",
];
app.get("/", async (req, res) => {
	const unsplashApiKey = "LNMTLI_Eva90JqswUZ1KG5wghHBt_pnN782nYSDdKRY";
	const query = queryList[Math.floor(Math.random() * queryList.length)];
	console.log(query);
	const api =
		"https://api.unsplash.com/photos/random/?client_id=" +
		unsplashApiKey +
		"&query=" +
		query;

	try {
		const response = await axios.get(api);
		const url = response.data.urls.small;
		res.render("home", { randomPhoto: url });
	} catch (error) {
		console.error(error);
	}
});

app.listen(port, () => {
	console.log("Server started successfully on port " + port);
});
