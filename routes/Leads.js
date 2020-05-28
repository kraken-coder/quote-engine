const express = require('express')
const {check, validationResult}  = require('express-validator')

const router = express.Router()


const LeadSchema  = require('../models/Lead')
const auth = require('../middleware/auth')


const validation   = [
    check('leadFName').not().isEmpty().withMessage('Lead first name is required'),
    check('leadLName').not().isEmpty().withMessage('Lead Last name is required'),
    check('job').not().isEmpty().withMessage('Lead first name is required'),
    check('age').not().isEmpty().withMessage('Lead first name is required'),

]


router.get('/', auth,  async (req, res) => {
   
    try {
        
        const leads =  await LeadSchema.find({user: req.user.id})
        
        res.json(leads)

    } catch (error) {
        
        res.status(500).json({msg: 'Server error'})
        
        console.error(error)
    }

    return
})

router.post('/', [auth, validation], async (req, res) => {

    const err = validationResult(req.body)
    
    if(!err.isEmpty()) {
        return res.status(400).json(err.array())
    }

    const { leadFName,
        leadLName,
        job,
        age,
        converted,
        interest}  = req.body

    const newLead =  new LeadSchema({
        leadFName,
        leadLName,
        job,
        age,
        converted,
        interest,
        user: req.user.id
    })

    try {

        await newLead.save()

        res.json({msg: 'Added lead succesfully'})

    } catch (error) {
        res.status(500).json({msg: 'server error'})

        console.error(error)
    }

    return
})



module.exports   = router