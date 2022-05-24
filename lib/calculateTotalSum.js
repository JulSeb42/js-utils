"use strict";

var calculateTotalSum = function calculateTotalSum(arr) {
  return arr.map(function (item) {
    return item;
  }).reduce(function (partialSum, a) {
    return partialSum + a;
  }, 0);
};

module.exports = calculateTotalSum;