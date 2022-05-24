"use strict";

var allCities = require("./allCities.json");

var capitalize = require("./capitalize");

var getRandomCity = function getRandomCity(country) {
  var randomNumber = Math.floor(Math.random() * allCities.length);
  var randomCity = "".concat(allCities[randomNumber].name, ", ").concat(allCities[randomNumber].country);

  if (country === undefined || country === null) {
    return randomCity;
  }

  var filteredArr = allCities.filter(function (city) {
    return city.country.toLowerCase() === country.toLowerCase();
  });
  var randomNumberFiltered = Math.floor(Math.random() * filteredArr.length);

  if (country === "all") {
    return randomCity;
  } else {
    return "".concat(filteredArr[randomNumberFiltered].name, ", ").concat(capitalize(country));
  }
};

module.exports = getRandomCity;