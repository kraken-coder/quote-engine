const bcrypt = require('bcryptjs' )
const express = require('express')
const {validationResult, check} = require('express-validator')
const jwt = require('jsonwebtoken')



const UserSchema = require('../models/Register')
const router  = express.Router()


const validation = [
check('email').isEmail().withMessage('Please enter email'),
check('password').not().isEmpty(),
check('name').not().isEmpty()
]



router.post('/', validation,  async (req, res) => {
      const err = validationResult(req)
      if(!err.isEmpty() ) {
          res.status(400).json({ error: err.array() })
          return
      }
      const { email, name, password} = req.body

     

     try {
      let user = await UserSchema.findOne({email})
      if(user) {
        return res.status(400).json({msg: 'user already exist'})
        
      }


      user = new UserSchema({
        name,
        email,
        password
      })


      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      await user.save()

      const payload = {
        user: {
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
       console.log(error)
     }

})






module.exports = router
