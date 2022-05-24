"use strict";

var getTimeNow = function getTimeNow() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0".concat(hours);
  }

  if (minutes < 10) {
    minutes = "0".concat(minutes);
  }

  return "".concat(hours, ":").concat(minutes);
};

module.exports = getTimeNow;