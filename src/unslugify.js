const capitalize = require("./capitalize")

const unslugify = str => {
    return capitalize(str.replaceAll("-", " ").replaceAll("_", " "))
}

module.exports = unslugify
