const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const commentSchema = new Schema({
    user: String,
    comment: String,
    date: Date,
},
{timestamps: true},
);

module.exports = commentSchema;