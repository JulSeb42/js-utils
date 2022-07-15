"use strict";

var convertToPascal = function convertToPascal(str) {
  return "".concat(str).toLowerCase().replace(new RegExp(/[-_]+/, "g"), " ").replace(new RegExp(/[^\w\s]/, "g"), "").replace(new RegExp(/\s+(.)(\w*)/, "g"), function ($1, $2, $3) {
    return "".concat($2.toUpperCase() + $3);
  }).replace(new RegExp(/\w/), function (s) {
    return s.toUpperCase();
  });
};

module.exports = convertToPascal;