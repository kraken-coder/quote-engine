const mongoose  = require('mongoose')


const string = process.env.DB
const connectDb = async () => {
    try {
        await mongoose.connect(string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    
        console.log('mongo db connected')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDb