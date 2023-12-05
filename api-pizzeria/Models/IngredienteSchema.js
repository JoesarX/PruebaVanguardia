const { default: mongoose, model, mongo } = require("mongoose");

const Ingrediente = new mongoose.Schema({
  sku: { type: String, require: true },
  nombre: { type: String, require: true },
  cantidad: { type: Number, require: true },
  fecha_vencimiento: {type: Date, require : true},
  fecha_compra : {type: Date, require : true},
  precio: { type: Number, require: true },
  marca: { type: String, require: true },
});

var myModel = mongoose.model("Ingredientes", Ingrediente,);

module.exports = myModel;