const { Router } = require('express')
const { toJWT , toData } = require('./jwt')
const router = new Router()


router.post('/logins', (req, res, next) => {
    const data = req.body

    if (!data.email || !data.password) {
        return res.status(400).send({
            message: 'Please supply a valid email and password'
            })
        } 
        return res.send({
            jwt: toJWT({ userId: 1 })
          })
})
  

module.exports = router