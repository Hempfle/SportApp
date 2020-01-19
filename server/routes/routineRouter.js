const express = require('express');
const router = express.Router();
const Routine = require('../models/RoutineModel.js');

router.get("/", async (request, response) => {
    try {
        let result = await Routine.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


router.get("/:id", async (request, response) => {
    try {
        let exercise = await Routine.findById(request.params.id).exec();
        response.send(exercise);
    } catch (error) {
        response.status(500).send(error);
    }
});


router.post("/", async (request, response) => {
    try {
        let exercise = new Routine(request.body);
        let result = await exercise.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


router.put("/:id", async (request, response) => {
    try {
        let exercise = await Routine.findById(request.params.id).exec();
        exercise.set(request.body);
        let result = await exercise.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


router.delete("/:id", async (request, response) => {
    try {
        let result = await Routine.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = router;