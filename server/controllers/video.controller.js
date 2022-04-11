const Video = require("../models/video.model");
const multer = require("multer");
const path = require("path");

//define file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "videos");
  },
  filename: (req, file, cb) => {
    if (file.mimetype === 'video/mkv') {
      filetype = 'mkv';
    }
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

//upload file function middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" }, 
  fileFilter: (req, file, cb) => {
    const fileTypes = /mp4|mkv/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("video");

//REST api

const createVideo = async (req, res, next) => {
  try {  
  let info = {
      video: req.file.path, 
      title: req.body.title,
      description: req.body.description,
    };
    const video = await Video.create(info); 
    res.status(200).send(video);
    console.log(video);
  } catch (error) {
    console.log(error) 
  } 
};

const getAllVideos = async (req, res) => {
  let videos = await Video.findAll({});
  res.status(200).send(videos);
};



module.exports = {upload, createVideo, getAllVideos};
