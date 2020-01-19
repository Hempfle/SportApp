const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({
    name: String,
    p_id: String,
});

module.exports = mongoose.model('Routine', routineSchema);