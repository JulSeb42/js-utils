"use strict";

var getRandomAvatar = function getRandomAvatar(gender) {
  var random = Math.floor(Math.random() * 114);
  var randomMf = Math.floor(Math.random() + 0.5);
  var mf = ["male", "female"];
  var genderPicture = gender === "male" ? "male" : gender === "female" ? "female" : mf[randomMf];
  return "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/".concat(genderPicture || "other", "/").concat(random, ".png");
};

module.exports = getRandomAvatar;