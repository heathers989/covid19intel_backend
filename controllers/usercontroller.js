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

  //delete
  comments.delete('/:id', (req, res) => {
    Comment.findByIdAndRemove(req.params.id, (err, deletedComment) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(deletedComment)
    })
  })

  //update
    comments.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedComment)
    })
  })


module.exports = comments