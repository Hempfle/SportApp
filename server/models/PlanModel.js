const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('Plan', planSchema);