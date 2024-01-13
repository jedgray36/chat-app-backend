
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: {type: String, unique: false, required: true},
    lastName: {type: String, unique: false, required: true},
    email: { type: String, unique: true, required: true },
    age: { type: Number, unique: false, required: true },
    password: { type: String, unique: false, required: true },
    isAdmin: { type: Boolean, default: false },
})

module.exports = mongoose.model('User', userSchema);