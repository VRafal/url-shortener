const ShortcutController = require("../controller/ShortcutController");
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
	res.send("API Poszłoooo ");
});

router.route("/shortcut").post(ShortcutController.createShortcut);

module.exports = router;
