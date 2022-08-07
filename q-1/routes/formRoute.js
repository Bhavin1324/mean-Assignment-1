const express = require("express");
const router = express.Router();
const { formActionPost } = require("../controller/procFormData");

router.route("/Regular").post(formActionPost);

module.exports = router;
