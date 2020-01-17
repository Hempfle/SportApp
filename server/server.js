const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exerciseRouter = require('./routes/exerciseRouter');

const app = express();
const server = require('http').Server(app);
const port = 5000;

mongoose.connect("mongodb://mongo:27017/training", { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//pre-flight requests
app.options('*', function(req, res) {
    res.send(200);
});

//routes
app.use('/exercise', exerciseRouter);


server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log('Node Endpoints working :)');
});

module.exports = server;