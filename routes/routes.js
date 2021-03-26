const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignUpModels')

router.post('/signup',(request, response)=> {
    
    const signedUpUser = new signupTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
        password2:request.body.password2
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>
        response.json(error))
})

module.exports = router