"use strict";

var stringifyPx = function stringifyPx(number) {
  if (typeof number === "string") {
    return number;
  } else {
    return "".concat(number, "px");
  }
};

module.exports = stringifyPx;