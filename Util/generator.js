const sequentialId = require("sequential-ids")

const generator = new sequentialId.Generator({
    digits:3,
    restore: "000"
})


generator.start()


module.exports = generator