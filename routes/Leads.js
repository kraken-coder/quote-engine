const express = require('express')
const {check, validationResult}  = require('express-validator')
const mongoose = require('mongoose')

const router = express.Router()


const LeadSchema  = require('../models/Lead')
const auth = require('../middleware/auth')


const validation   = [
    check('leadFName').not().isEmpty().withMessage('Lead first name is required'),
    check('leadLName').not().isEmpty().withMessage('Lead Last name is required'),
    check('job').not().isEmpty().withMessage('Lead first name is required'),
    check('age').not().isEmpty().withMessage('Lead first name is required'),

]


router.post('/', validation, async (req, res) => {
const err = validationResult(req.body)
if(!err.isEmpty()) {
    return res.status(400).json(err.array())
}


})



module.exports   = router