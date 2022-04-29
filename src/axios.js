const instance = require('axios')
const axios = instance.create({
    baseURL: `http://localhost:5000`
})

module.exports = axios