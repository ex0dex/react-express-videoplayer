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

const getOnePost = async (req, res) => {
  let id = req.params.id;
  let post = await Post.findByPk(id);
  res.status(200).send(post);
};

const updatePost = async (req, res) => {
  try {
    let id = req.params.id
    await Post.update(req.body,{
      where:{
        id:id
      } 
    })
    let updatedPost = await Post.findByPk(id)
    return res.status(200).send(updatedPost)
  } catch (error) {
    console.log(error)
  }
 
}

const deletePost = async (req, res) => {
  let id = req.params.id;
  await Post.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).send("Post Deleted");
};

module.exports = {upload, createVideo, getAllVideos};
