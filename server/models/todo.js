const mongoose = require('mongoose');

// Define the To-Do schema
const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
});

// Export the To-Do model
module.exports = mongoose.model('Todo', todoSchema);
