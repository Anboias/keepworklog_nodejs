const mongoose = require('mongoose');

const NoteSchema =
    new mongoose.Schema({
        title: {
            type: String,
            required: [true, 'Please add a title']
        }
    })