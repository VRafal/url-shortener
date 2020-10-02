require("dotenv").config();
const { loadJson, pushJson } = require("../service/DataService");
const { default: ShortUniqueId } = require("short-unique-id");

createShortcut = (req, res) => {
	const url = req.query.url;
	const uid = new ShortUniqueId();
	const uidVal = uid();
	const data = {
		url: url,
		id: uidVal,
		createdAt: Date(Date.now()),
		shortURL: `http://127.0.0.1:8080/r/${uidVal}`
	};

	pushJson(data);

	res.json({
		status: 200,
		message: "Shortcut created successfully.",
		data: data
	});
};

module.exports = { createShortcut };
