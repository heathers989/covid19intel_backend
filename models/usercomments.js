const mongoose = require("mongoose");
const userComments = mongoose.Schema({
    name: { type: String, required: true},
    comments: {type: String, required: true},
    location:{type: String, required: true}
},{timestamps: true})

module.exports = mongoose.model('usercommentdata', userComments);
