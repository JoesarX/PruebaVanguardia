const { default: mongoose, model, mongo } = require("mongoose");

const AllStudents = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  course: { type: String, required: true },
});

var myModel = mongoose.model("MYStudents", AllStudents, "alumnos");

module.exports = myModel;