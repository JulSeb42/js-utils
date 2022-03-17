const slugify = require("./slugify")

const convertToEmail = (name, domain) => {
    return `${slugify(name).replace("-", ".")}@${domain || "email.com"}`
}

module.exports = convertToEmail
