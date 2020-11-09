//Model is a representation of what we want in our database

const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const droneSchema = new Schema (
    {
        name: String,
        propellers: Number,
        maxSpeed: Number
    },
    {
        timeStamps: true
    }
);

const Drone = model('Drone', droneSchema);

module.exports = Drone;
