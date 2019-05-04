let express = require('express');
let router = express.Router();
let { getCars, isEquivalent, getCarByID, updateCar, removeCar } = require('./handlers/car');
let isRegistered = require('./middlewares/delete-authorization');

router.get('/car', function(req, res) {
  res.status(200).send(getCars());
});

router.get('/car/:id', function(req, res) {
  let car = getCarByID(Number(req.params.id));
  if(!car) {
    res.status(404).send('Car with this id don`t find');
  } else {
    res.status(200).send(car);
  }
});

router.post('/car', function(req, res) {
  let car = {
    "brand": req.body.brand,
    "model": req.body.model,
    "engineVolume": req.body.engineVolume,
    "year": req.body.year
  };
  if(isEquivalent(car)) {
    res.status(201).send(car);
  } else {
    res.status(409).send('Car already exists.');
  }
});

router.put('/car/:id', function(req, res) {
  let newUpdate = {
    "brand": req.body.brand,
    "model": req.body.model,
    "engineVolume": req.body.engineVolume,
    "year": req.body.year
  }
  if(!getCarByID(Number(req.params.id))) {
    res.status(404).send('Car with this id don`t find');
  } else {
    let newCar = updateCar(newUpdate, Number(req.params.id));
    res.status(200).send(newCar);
  }
});

router.delete('/car/:id', isRegistered, function(req, res) {
  if(!getCarByID(Number(req.params.id))) {
    res.status(404).send('Car with this id don`t find');
  } else {
    removeCar(Number(req.params.id));
    res.status(200).send('The car has been successfully removed');
  }
});

module.exports = router;