const express = require('express');
const router = express.Router();
const FormModel = require('../Models/form')
// For submit
router.post('/',async (req,res)=>{
    const submit = new FormModel({
        name : req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    try{
        const user = await submit.save()
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({ message: err })
    }
})

module.exports = router;