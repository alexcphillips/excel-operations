const router = require("express").Router();

router.get("/health", (req, res) => res.status(200).send());

module.exports = router;
