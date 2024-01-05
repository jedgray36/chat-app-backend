
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: {type: String, unique: false, required: true},
    LastName: {type: String, unique: false, required: true},
    email: { type: String, unique: true, required: true },
    age: { type: Number, unique: false, required: true },
    password: { type: String, unique: false, required: true },
    followers: { type: Array, default: [],
      },
})

module.exports = mongoose.model('User', userSchema);