const express = require("express");
const router = express.Router();
const videoRouter = require('./video.router')

router.use('/videos', videoRouter)

module.exports = router