const stringifyPx = number => {
    if (typeof number === "string") {
        return number
    } else {
        return `${number}px`
    }
}

module.exports = stringifyPx
