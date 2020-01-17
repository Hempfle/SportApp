const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Exercise = require("./models/ExerciseModel");

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

app.post("/exercise", async (request, response) => {
    try {
        console.log(request.body);
        let exercise = new Exercise(request.body);
        console.log(exercise);
        let result = await exercise.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


app.get("/exercise", async (request, response) => {
    try {
        let result = await Exercise.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/exercise/:id", async (request, response) => {
    try {
        let exercise = await Exercise.findById(request.params.id).exec();
        response.send(exercise);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.put("/exercise/:id", async (request, response) => {
    try {
        let exercise = await Exercise.findById(request.params.id).exec();
        exercise.set(request.body);
        let result = await exercise.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.delete("/exercise/:id", async (request, response) => {
    try {
        let result = await Exercise.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log('Node Endpoints working :)');
});

module.exports = server;