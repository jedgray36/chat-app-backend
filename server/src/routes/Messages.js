const router = require("express").Router();
const Message = require("../models/message");

//add message 


router.post('/', async (req, res) => {
    const newMessage = new Message(req.body);

    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage)
    } catch(e) {
        res.status(500).json(e)
    }
})



//get message

router.get('/:coversationId', async (res, req) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId,
        })
        res.status(200).json(messages);
    } catch(e) {
        res.status(500).json(e)
    }
});

module.exports = router;