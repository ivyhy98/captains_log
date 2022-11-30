const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const Comments = require('./comments')

const logSchema = new Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: Boolean,
    comments: [Comments],
  },
  { timestamps: true }
);

const Logs = model('Logs', logSchema);
module.exports = Logs;