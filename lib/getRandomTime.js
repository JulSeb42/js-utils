"use strict";

var getRandomTime = function getRandomTime(min, max) {
  var hour = Math.floor(Math.random() * (max - min)) + min;
  var minutes = Math.floor(Math.random() * (59 - 0) + 0);

  if (hour < 10) {
    hour = "0".concat(hour);
  }

  if (minutes < 10) {
    minutes = "0".concat(minutes);
  }

  return "".concat(hour, ":").concat(minutes);
};

module.exports = getRandomTime;