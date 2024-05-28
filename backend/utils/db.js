const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI
// mongoose.connect(URI)

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log('Connection successful to DB!');
    } catch (error) {
        console.log('Databse connection failed!');
    }
}

module.exports = connectDb