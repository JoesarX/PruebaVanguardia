const { default: mongoose, model, mongo } = require("mongoose");

const Pizza = new mongoose.Schema({
    sku: { type: String, require: true },
    nombre: { type: String, require: true },
    precio: { type: Number, require: true },
    tamano: { type: String, require: true },
    ingredientes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingrediente' }]
});

var myModel = mongoose.model("Pizzas", Pizza,);

module.exports = myModel;