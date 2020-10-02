require("dotenv").config();

const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "dev") {
	const morgan = require("morgan");
	app.use(morgan("tiny"));
}

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

const redirectsRoutes = require("./routes/redirects");
app.use("/r", redirectsRoutes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
