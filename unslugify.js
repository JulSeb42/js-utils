import capitalize from "./capitalize"

const unslugify = str => {
    return capitalize(str.replaceAll("-", " ").replaceAll("_", " "))
}

export default unslugify
