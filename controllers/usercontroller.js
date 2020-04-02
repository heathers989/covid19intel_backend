const express = require("express");
const comments = express.Router();
const Comment = require("../models/usercomments.js");

//index
comments.get('/', (req, res) => {
    Comment.find({}, (err, foundComments) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundComments)
    })
  })

//create
comments.post('/', (req, res) => {
    Comment.create(req.body, (error, createdComment) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).json(createdComment) //  .json() will send proper headers in response so client knows it's json coming back
    })
  })



module.exports = comments