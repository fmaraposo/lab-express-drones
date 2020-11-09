const express = require('express');
const Drone = require('../models/drone.model.js');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allTheDronesFromDB) => {
      console.log(`Drones from DB ${allTheDronesFromDB}`);
      res.render('drones/list', {drones: allTheDronesFromDB});
    })
    .catch((err) => {
      console.log(`An error was found ${err}`);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  let {name, propellers, maxSpeed} = req.body;
  Drone.create({
    name: name,
    propellers: propellers,
    maxSpeed: maxSpeed
  })
    .then((drone) => {
      console.log(`This Drone was created ${drone.name}`);
      res.redirect('/');
    })
    .catch((err) => {
      console.log(`There was an error, ${err}`);
      res.render('drones/create-form');
    });
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let droneId = req.params.id; //this stores the id of the component in a variable
  Drone.findById(droneId)
    .then((theDroneFound) => {
      res.render('drones/update-form', {drone: theDroneFound});
    }). catch((err) =>{
      console.log(`There was an error, ${err}`);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let droneId = req.params.id;
  let {name, propellers, maxSpeed} = req.body;
  Drone.findByIdAndUpdate(droneId, {
    name,
    propellers,
    maxSpeed
  })
  .then(() => {
    res.redirect('/drones');
  }).catch((err) => {
    console.log(`There was an error, ${err}`);
    res.render('/drones/:id/edit');
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
