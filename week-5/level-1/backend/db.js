const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://admin-abhimanyu:pass1234@cluster0.23wvo.mongodb.net/todo');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}