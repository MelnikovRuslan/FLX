let fs = require('fs');

function getCars() {
  return fs.readFileSync('db/data.json', 'utf-8', function (err, cars) {
    if (err) {
      console.log('error happened during reading the file');
      return console.log(err)
    } else {
      return cars;
    }
  });
}

function getCarByID(id) {
  return JSON.parse(getCars()).find(car => car.id === id);
}

function isEquivalent(car) {
  let cars =  JSON.parse(getCars());
  for(let i = 0; i < cars.length; i++) {
    let { brand, model, engineVolume, year } = cars[i];
    if(brand === car.brand && model === car.model && engineVolume === car.engineVolume && year === car.year) {
      return false;
    }
  }
  addCarToDB(car, cars);
  return true;
}

function addCarToDB(car, cars) {
  car.id = setID(cars)
  cars.push(car);
  var json = JSON.stringify(cars);
  writeToDB(json);
}

let setID = function(cars) {
  for(let i = 0; i < cars.length; i++) {
    if(!cars.some(function(car) {
      return car.id === i;
    })) {
      return i;
    }
  }
}

function updateCar(newUpdate, id) {
  let cars = JSON.parse(getCars());
  for(let i = 0; i < cars.length; i++){
    if(cars[i].id === id) {
      cars[i] = Object.assign({}, cars[i], newUpdate);
      writeToDB(JSON.stringify(cars));
      return cars[i];
    }
  }
}

function removeCar(id) {
  const newCarList = JSON.parse(getCars()).filter(car => car.id !== id);
  writeToDB(JSON.stringify(newCarList));
}

function writeToDB(cars) {
  fs.writeFile('db/data.json', cars, 'utf8', function(){
    console.log('Done');
  });
}

module.exports = { getCars, isEquivalent, getCarByID, updateCar, removeCar };