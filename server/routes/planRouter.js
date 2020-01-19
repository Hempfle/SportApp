const express = require('express');
const router = express.Router();
const Plan = require('../models/PlanModel.js');

router.get("/", async (request, response) => {
    try {
        let result = await Plan.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


router.get("/:id", async (request, response) => {
    try {
        let plan = await Plan.findById(request.params.id).exec();
        response.send(plan);
    } catch (error) {
        response.status(500).send(error);
    }
});


router.post("/", async (request, response) => {
    try {
        let plan = new Plan(request.body);
        let result = await plan.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


router.put("/:id", async (request, response) => {
    try {
        let plan = await Plan.findById(request.params.id).exec();
        plan.set(request.body);
        let result = await plan.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


router.delete("/:id", async (request, response) => {
    try {
        let result = await Plan.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = router;