const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const Comments = require('./comments');

const foodLogSchema = new Schema(
  {
    title: String,
    thoughts: String,
    food: String,
    comments: [Comments],
  },
  { timestamps: true }
);

const FoodLog = model('FoodLog', foodLogSchema);

module.exports = FoodLog;