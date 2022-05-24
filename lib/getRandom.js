"use strict";

var getRandom = function getRandom(arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

module.exports = getRandom;