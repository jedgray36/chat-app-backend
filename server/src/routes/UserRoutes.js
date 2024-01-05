const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/users', async (req, res) => {
    try {
        const newUser = new User ({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password
        })

    const savedUser = await newUser.save();
    res.json(savedUser);
    } catch(e) {
        res.status(500).json({message: e.message})
    }
})

module.exports = router;