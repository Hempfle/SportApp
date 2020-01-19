const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({
    name: String,
    p_id: Number,
});

module.exports = mongoose.model('Routine', routineSchema);