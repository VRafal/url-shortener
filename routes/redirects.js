const RedirectController = require("../controller/RedirectController");
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
	res.send("Poszłoooo ");
});

router.route("/*").get(RedirectController.redirectTo);

module.exports = router;
