"use strict";

var allCities = require("./allCities.json");

var capitalize = require("./capitalize");

var getRandomCity = function getRandomCity(country) {
  var filteredArr = allCities.filter(function (city) {
    return city.country.toLowerCase() === country.toLowerCase();
  });
  var randomNumber = Math.floor(Math.random() * allCities.length);
  var randomNumberFiltered = Math.floor(Math.random() * filteredArr.length);

  if (country === "all") {
    return "".concat(allCities[randomNumber].name, ", ").concat(allCities[randomNumber].country);
  } else {
    return "".concat(filteredArr[randomNumberFiltered].name, ", ").concat(capitalize(country));
  }
};

module.exports = getRandomCity;