const allCities = require("./allCities.json")
const capitalize = require("./capitalize")

const getRandomCity = country => {
    const randomNumber = Math.floor(Math.random() * allCities.length)

    const randomCity = `${allCities[randomNumber].name}, ${allCities[randomNumber].country}`

    if (country === undefined || country === null) {
        return randomCity
    }

    const filteredArr = allCities.filter(
        city => city.country.toLowerCase() === country.toLowerCase()
    )

    const randomNumberFiltered = Math.floor(Math.random() * filteredArr.length)

    if (country === "all") {
        return randomCity
    } else {
        return `${filteredArr[randomNumberFiltered].name}, ${capitalize(
            country
        )}`
    }
}

module.exports = getRandomCity
