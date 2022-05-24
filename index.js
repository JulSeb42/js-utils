// const all components
const allCities = require("./src/allCities.json")
const calculateTotalSum = require("./src/calculateTotalSum")
const capitalize = require("./src/capitalize")
const convertDate = require("./src/convertDate")
const convertDateShort = require("./src/convertDateShort")
const convertToEmail = require("./src/convertToEmail")
const convertYoutube = require("./src/convertYoutube")
const detectLanguage = require("./src/detectLanguage")
const getFirstName = require("./src/getFirstName")
const getLastName = require("./src/getLastName")
const getRandom = require("./src/getRandom")
const getRandomAvatar = require("./src/getRandomAvatar")
const getRandomCity = require("./src/getRandomCity")
const getRandomDate = require("./src/getRandomDate")
const getRandomLocation = require("./src/getRandomLocation")
const getRandomNumber = require("./src/getRandomNumber")
const getRandomString = require("./src/getRandomString")
const getRandomTime = require("./src/getRandomTime")
const getTimeNow = require("./src/getTimeNow")
const getToday = require("./src/getToday")
const { passwordRegex, emailRegex } = require("./src/regex")
const scrollToTop = require("./src/scrollToTop")
const slugify = require("./src/slugify")
const unslugify = require("./src/unslugify")
const convertPrice = require("./src/convertPrice")

// Exports all components
module.exports = {
    allCities,
    calculateTotalSum,
    capitalize,
    convertDate,
    convertDateShort,
    convertToEmail,
    convertYoutube,
    detectLanguage,
    getFirstName,
    getLastName,
    getRandom,
    getRandomAvatar,
    getRandomCity,
    getRandomDate,
    getRandomLocation,
    getRandomNumber,
    getRandomString,
    getRandomTime,
    getTimeNow,
    getToday,
    passwordRegex,
    emailRegex,
    scrollToTop,
    slugify,
    unslugify,
    convertPrice,
}
