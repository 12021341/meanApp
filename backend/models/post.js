const mongoose = require('mongoose');

// Create schema
const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}

})

// Create model 
module.exports = mongoose.model('Post', postSchema)