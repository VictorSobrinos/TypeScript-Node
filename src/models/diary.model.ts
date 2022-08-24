const { Schema, model } = require('mongoose');

const diarySchema = new Schema({
    id: {
        type: Number
    },
    date: {
        type: String,
        default: 'No date provided'
    },
    weather: {
        type: String
    },
    visibility: {
        type: String
    },
    comment: {
        type: String
    }
})

const Diary = model('Diary', diarySchema)

module.exports = Diary