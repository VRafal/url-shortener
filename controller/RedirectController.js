require("dotenv").config();
const { loadJson } = require("../service/DataService");

// Save sampel data
// saveJson([
// 	{
// 		url: "https://www.smashingmagazine.com/",
// 		id: "0a8llI",
// 		createdAt: "",
// 		shortURL: "http://127.0.0.1/r/0a8llI"
// 	},
// 	{
// 		url: "https://thefwa.com/",
// 		id: "RNLZhv",
// 		createdAt: "",
// 		shortURL: "http://127.0.0.1/r/RNLZhv"
// 	},
// 	{
// 		url: "https://www.awwwards.com/",
// 		id: "g0utIt",
// 		createdAt: "",
// 		shortURL: "http://127.0.0.1/r/g0utIt"
// 	}
// ]);

redirectTo = (req, res) => {
	const jsonData = loadJson();
	const shortcut = req.params[0];
	const record = jsonData.find((element) => element.id === shortcut);

	if (!record) {
		console.warn(`Shortcut ${shortcut} not found.`);
		res.redirect(process.env.SHORTCUT_NOT_FOUND_URL);
		return;
	}

	//res.send(shortcut + " / " + record.url);
	res.redirect(record.url);
};

module.exports = { redirectTo };
