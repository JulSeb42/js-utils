"use strict";

var slugify = require("./slugify");

var convertToEmail = function convertToEmail(name, domain) {
  return "".concat(slugify(name).replace("-", "."), "@").concat(domain || "email.com");
};

module.exports = convertToEmail;