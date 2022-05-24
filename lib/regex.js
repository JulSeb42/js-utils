"use strict";

var passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
module.exports = {
  passwordRegex: passwordRegex,
  emailRegex: emailRegex
};