const mongoose = require('mongoose')

const connect = () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
        }).then((conn) => {
            console.log(`MongoDB connected : ${conn.connection.host}`.blue.bold.underline)
        })
    } catch (error) {
        console.log(error.message.red.bold)
        process.exit()
    }

}
module.exports = connect