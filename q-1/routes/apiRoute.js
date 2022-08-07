const express = require("express");
const router = express.Router();
const { getPeoples, postPeoples } = require("../controller/procFormData");

router.route("/").get(getPeoples).post(postPeoples);

module.exports = router;
