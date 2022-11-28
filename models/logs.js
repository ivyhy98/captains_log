const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const logSchema = new Schema({
    title: String,
    entry: String,
    shipIsBroken: Boolean
},
{timestamps: true},
)

const Logs = model('Logs', logSchema);

module.exports = Logs;