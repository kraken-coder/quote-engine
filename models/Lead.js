const mongoose = require('mongoose')


const schema = mongoose.Schema

const LeadSchema = new schema({
    user:{
        type: schema.Types.ObjectId,
        ref: 'Registration'
    },

    leadFName: String,
    leadLname: String,
    job: String,
    age: String,
    converted:Boolean,
    interest:{
        type: Array,
        default: []
    }

})

module.exports = mongoose.model('Leads',LeadSchema )
