"use strict";

var convertYoutube = function convertYoutube(str) {
  return str.replace("watch?v=", "embed/");
};

module.exports = convertYoutube;