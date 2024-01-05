const router = require('express').Router();
const Conversation = require('../models/conversation');



//new covo

//get convo of user
router.post('/', async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.recieverId],
    });
    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation)
    } catch(e) {
        res.status(500).json(e);
    }
})

module.exports = router;