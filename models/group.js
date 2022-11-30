const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
    name: { 
        type: String, 
        unique: true,
        trim: true,
        required: true },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Group', groupSchema)