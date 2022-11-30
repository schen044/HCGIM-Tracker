const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goalSchema = new Schema({
    name: {
        type: String,
        trim: true, 
        required: true
    },
    goalType: {
        type: String,
        enum: ['goal', 'clue', 'personal'],
        required: true,
        default: 'personal'
    },
    tier: {
        type: String,
        enum: ['easy', 'medium', 'hard', 'elite', 'master'],
    },
    icon: String,
    completed: { 
        type: Boolean, 
        required: true,
        default: false 
    },
    group: {type: Schema.Types.ObjectId, ref: 'Group'}
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)