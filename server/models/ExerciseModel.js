const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    name: String,
    r_id: Number,
    repetitions: Number,
    sets: Number,
    muscle: String,
    weight: Number
});

module.exports = mongoose.model('Exercises', exerciseSchema);