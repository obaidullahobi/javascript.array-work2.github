console.log('how are you');

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateCars(numberOfCars) {
  const cars = [];

  const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
  const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];

  for (let i = 0; i < numberOfCars; i++) {
    const car = {};
    const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
    const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

    car.make = carMakes[randomMakeIndex];
    car.color = carColors[randomColorIndex];
    car.speed = randomIntFromInterval(0, 100);

    cars.push(car);
  }

  return cars;
}

const cars = generateCars(10);

console.log(cars);

const filteredCars = cars.filter(function (car) {
  return (car.speed >= 30 && car.speed <= 60);
});

//console.log(filteredCars);

const filteredCars2 = cars.filter(function (car) {
  return (car.color !== 'lightyellow');
});

const filteredCars2JustMakes = filteredCars2.map(function (car) {
  return car.make;
});

//console.log(filteredCars2JustMakes);

const danishCars = cars.map(function (car) {
/*  const danishCar = {};
  danishCar.maerke = car.make;
  danishCar.fart = car.speed;
  danishCar.farve = car.color;
  return danishCar;*/
  return {
    maerke: car.make,
    fart: car.speed,
    farve: car.color,
  }
});

console.log(danishCars);