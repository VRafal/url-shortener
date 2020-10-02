require("dotenv").config();
const fs = require("fs");
const jsonPath = process.env.DB_FILE_PATH;

pushJson = (data) => {
	const jsonData = loadJson();
	saveJson([...jsonData, data]);
};

saveJson = (data) => {
	try {
		fs.writeFileSync(jsonPath, JSON.stringify(data));
	} catch (err) {
		console.error(err);
	}
};

loadJson = () => {
	try {
		if (!fs.existsSync(jsonPath)) {
			console.warn(`The ${jsonPath} file does not exist!`);
			return [];
		}
		const data = fs.readFileSync(jsonPath);
		if (data.length == 0) {
			console.warn(`The ${jsonPath} file is empty!`);
			return [];
		}
		return JSON.parse(data);
	} catch (err) {
		console.error(err);
		return [];
	}
};

module.exports = { saveJson, loadJson, pushJson };
