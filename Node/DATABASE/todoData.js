const mongoose = require("mongoose")
const SCHEMA = new mongoose.Schema({
  todoTask: String
})

module.exports = mongoose.model("todos", SCHEMA)