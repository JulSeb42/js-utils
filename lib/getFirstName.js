"use strict";

var getFirstName = function getFirstName(fullName) {
  var arr = fullName.split(" ");
  return arr[0];
};

module.exports = getFirstName;