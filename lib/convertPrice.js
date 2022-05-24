"use strict";

var convertPrice = function convertPrice(num, currency) {
  var formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency || "EUR"
  });
  return formatter.format(num);
};

module.exports = convertPrice;