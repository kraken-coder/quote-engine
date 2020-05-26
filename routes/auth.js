const bcrypt = require('bcryptjs' )
const express = require('express')
const {validationResult, check} = require('express-validator')
const jwt = require('jsonwebtoken')

const auth = require('../middleware/auth')

const UserSchema = require('../models/Register')
const router  = express.Router()

const validation = [
    check('email')
    .isEmail()
    .withMessage('Please enter a valid email'),
    check('password')
    .not()
    .isEmail()
    .withMessage('PLease enter password')
]


router.get('/',  auth,  async (req, res) => {
    
    try {
        const user = await UserSchema.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        res.json('server error').status(500)
    }

})




router.post('/', validation, async (req, res) => {
    const err = validationResult(req)
    if(!err.isEmpty()) {
        return res.status(400).json(err.array())
 
    }
    const {email, password} = req.body
 
    try {
        const user =  await UserSchema.findOne({email})
        const isPassword = await bcrypt.compare(password, user.password)

        if(!user) {
            return res.status('400').json({msg: 'Invalid credentials. '})
        }

        if(!isPassword) {
            return res,status(400).json('Invalid credentials ') 
        }

        const payload = {
            user :{
                id: user.id
            }
        }
        const secret = process.env.secret

        jwt.sign(
            payload, 
            secret,
            { expiresIn: Math.floor(Date.now() / 1000) + 60 * 60 },
            (error, token) => {
                if(error) throw error
                res.json(token)
            }
        )

    } catch (error) {
        console.error(error)
    }
 
 
 
})



module.exports = router