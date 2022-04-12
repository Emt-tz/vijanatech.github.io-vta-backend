//task ya jana
const car1 = {
  name: "toyota",
  type: "",
  make: "",
  seats: "",
  model: ""
};
const car2 = {
  name: "rav4",
  type: "",
  make: "",
  seats: "",
  model: ""
};
const car3 = {
  name: "",
  type: "",
  make: "",
  seats: "",
  model: ""
};
const car4 = {
  name: "",
  type: "",
  make: "",
  seats: "",
  model: ""
};
const car5 = {
  name: "",
  type: "",
  make: "",
  seats: "",
  model: ""
};

var cars = [car1, car2, car3, car4, car5];

// console.log(cars[0].name,cars[0].type,cars[0].make,cars[0].seats,cars[0].models);
// console.log(cars[1].name,cars[1].type,cars[1].make,cars[1].seats,cars[1].models);
// console.log(cars[2].name,cars[2].type,cars[2].make,cars[2].seats,cars[2].models);
// console.log(cars[3].name,cars[3].type,cars[3].make,cars[3].seats,cars[3].models);
// console.log(cars[4].name,cars[4].type,cars[4].make,cars[4].seats,cars[4].models);

//js functions
function createCars() {
  //implement logic
  console.log("normal function");
} //normal functions

const _createCars = () => {
  console.log("arrow function");
}; //arrow functions

//to execute a function
/*
you call the function name with () brackets
_createCars();
*/

//function parameters
function controlNumber(number, controlnumber) {
  console.log(number, controlnumber);
}

controlNumber("0734377153", "1234567891");
controlNumber("0734377152", "1234567891");

const _controlNumber = (number, controlnumber) => {
  console.log(number, controlnumber);
};

_controlNumber("0734377153", "1234567891");
_controlNumber("0734377152", "1234567891");

//return statements
/*
function can return booleans,strings,numbers,objects,arrays e.t.c

use the word return datatype;
*/

function analysis() {
  const chart = true;
  return true;
}

//create car object function
const createManyCars = (name, type, make, seats, model) => {
  const carObject = {
    name: name,
    type: type,
    make: make,
    seats: seats,
    model: model
  };
  return carObject;
};
createManyCars("toyota", "toyota", "nissan", "5", "model");
createManyCars("toyota", "toyota", "nissan", "5", "model");
createManyCars("toyota", "toyota", "nissan", "5", "model");
createManyCars("toyota", "toyota", "nissan", "5", "model");
createManyCars("toyota", "toyota", "nissan", "5", "model");

const printCarDetails = (car) => {
  return console.log(car.name, car.type, car.make, car.seats, car.model);
};

printCarDetails(createManyCars("toyota", "toyota", "nissan", "4", "model"));

/*

using functions create a id card presentation and create 5 id cards with different
value and print all details to the console using functions

id-card-presentation

firtname
middlename
lastname
date_create
date_expiry
nidanumber

*/
