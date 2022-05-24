const allCities = require("./allCities.json")
const capitalize = require("./capitalize")

const getRandomCity = country => {
    const filteredArr = allCities.filter(
        city => city.country.toLowerCase() === country.toLowerCase()
    )

    const randomNumber = Math.floor(Math.random() * allCities.length)

    const randomNumberFiltered = Math.floor(Math.random() * filteredArr.length)

    if (country === "all") {
        return `${allCities[randomNumber].name}, ${allCities[randomNumber].country}`
    } else {
        return `${filteredArr[randomNumberFiltered].name}, ${capitalize(
            country
        )}`
    }
}

module.exports = getRandomCity
