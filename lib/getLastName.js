"use strict";

var getLastName = function getLastName(str) {
  var split = str.split(" ");
  return split[split.length - 1];
};

module.exports = getLastName;