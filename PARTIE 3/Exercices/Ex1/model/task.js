const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: false
});

module.exports = mongoose.model('Task', taskSchema); 