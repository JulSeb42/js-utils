"use strict";

var capitalize = require("./capitalize");

var unslugify = function unslugify(str) {
  return capitalize(str.replaceAll("-", " ").replaceAll("_", " "));
};

module.exports = unslugify;