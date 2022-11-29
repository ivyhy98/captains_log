const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const commentSchema = require('./comments')

const logSchema = new Schema({
    title: String,
    entry: String,
    shipIsBroken: Boolean,
    comments: [ commentSchema ]
},
{timestamps: true},
)

const Logs = model('Logs', logSchema);
module.exports = Logs;