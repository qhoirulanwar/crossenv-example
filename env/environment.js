let env

if (process.env.NODE_ENV != "production") {
    // Development mode    
    env = require("../config/development.json")
} else {
    // Production mode
    env = require("../config/production.json")
}

module.exports = env
