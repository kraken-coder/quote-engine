const mongoose  = require('mongoose')


const string = process.env.DB
const connectDb = async () => {
    await mongoose.connect(string, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('mongo db connected')
}


module.exports = connectDb