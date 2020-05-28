const mongoose = require('mongoose')
const schema = mongoose.Schema

const RegSchema  =  new schema ({
name: {
    type: String,
    required: true
},
email: {
    type: String,
    required:  true,
    unique: true
},
password: {
    type: String,
    require: true
},

createdAt: {
    type: Date,
    default: Date.now
}
})





module.exports = mongoose.model('Registration', RegSchema)