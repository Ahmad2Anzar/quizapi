const mongoose = require('mongoose')

const { Schema } = mongoose;

const prevQuizSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    prev_data: {
        type: Array,
        required: true,
    },

});

module.exports = mongoose.model('prevQuiz', prevQuizSchema)