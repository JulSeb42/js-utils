"use strict";

var allCities = require("./allCities.json");

var getRandomLocation = function getRandomLocation() {
  var randomNumber = Math.floor(Math.random() * allCities.length);
  return "".concat(allCities[randomNumber].name, ", ").concat(allCities[randomNumber].country);
};

module.exports = getRandomLocation;