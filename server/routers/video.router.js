const express = require("express");
const router = express.Router();
const videoController = require('../controllers/video.controller')
 
router.route('/')
    .get(videoController.getAllVideos) // get all videos
router.route('/video')
    .post(videoController.upload, videoController.createVideo) //create video

router.route('/video/:id')
    .get() // get one post(view video)
    .put() // update video
    .delete() // delete video

module.exports = router 