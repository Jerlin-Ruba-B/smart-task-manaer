const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected")
    }
    catch(error){
        console.log("DB Connection:",error.message)
        process.exit(1)
    }
}

module.exports = connectDb