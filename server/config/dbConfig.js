const mongooose = require("mongoose")

const mongoURL = process.env.mongo_url

mongooose.connect(mongoURL)

const connection = mongooose.connection

connection.on('connected', () => {
    console.log('DB connected')
})