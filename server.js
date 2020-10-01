require("dotenv").config();

const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();

if (process.env.NODE_ENV === "dev") {
	const morgan = require("morgan");
	app.use(morgan("tiny"));
}

app.get("/", function (req, res) {
	res.send("Poszłoooo ");
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
