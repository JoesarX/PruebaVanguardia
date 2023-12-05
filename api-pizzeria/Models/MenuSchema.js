const { default: mongoose, model, mongo } = require("mongoose");

const Menu = new mongoose.Schema({
    sku: { type: String, require: true },
    nombre: { type: String, require: true },
    precio: { type: Number, require: true },
    combo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' }]
});

var myModel = mongoose.model("Menus", Menu,);

module.exports = myModel;