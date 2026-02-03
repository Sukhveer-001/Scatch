const express = require("express");
const router = express.Router();
const User = require("../models/user-model");

const app = express();

router.get("/", (req, res) => {
    res.send("User Router Working");
})

module.exports = router;