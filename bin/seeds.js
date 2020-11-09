// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/drone.model.js');
const DB_NAME = 'express-drones-dev';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  //Create the Drones

  Drone.create(drones)
    .then(drones => {
        console.log(`Created ${drones.length} drones`);
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(`An error ocurred while creating books from the DB: ${err}`);
    });