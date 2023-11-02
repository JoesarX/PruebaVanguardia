const IngredienteScheme = require("../Models/IngredienteSchema")

const getAllIngredientes = async (req, res) => {
    try {
        const ingredientes = await IngredienteScheme.find();
        res.status(200).json(ingredientes);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching ingredientes." });
    }
};


const getIngrediente = async (req, res) => {
    try {
        const ingrediente = await IngredienteScheme.findOne({ sku: req.params.sku });
        if (!ingrediente) {
            return res.status(404).json({ error: "Ingrediente not found" });
        }
        res.status(200).json(ingrediente);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the ingrediente." });
    }
};

const postIngrediente = async (req, res) => {
    const ingrediente = new IngredienteScheme(
        {
            sku: req.body.sku,
            nombre: req.body.nombre,
            cantidad: req.body.cantidad,
            fecha_vencimiento: req.body.fecha_vencimiento,
            fecha_compra: req.body.fecha_compra,
            precio: req.body.precio,
            marca: req.body.marca
        }
    );
    try {
        const result = await ingrediente.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while saving the ingrediente." });
    }
}

const putIngrediente = async (req, res) => {
    try {
        const ingrediente = await IngredienteScheme.findOneAndUpdate(
            { sku: req.params.sku },
            {
                sku: req.body.sku,
                nombre: req.body.nombre,
                cantidad: req.body.cantidad,
                fecha_vencimiento: req.body.fecha_vencimiento,
                fecha_compra: req.body.fecha_compra,
                precio: req.body.precio,
                marca: req.body.marca,
            },
            { new: true }
        );
        if (!ingrediente) {
            return res.status(404).json({ error: "Ingrediente not found" });
        }
        res.status(200).json(ingrediente);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the ingrediente." });
    }
};

const deleteIngrediente = async (req, res) => {
    try {
        const ingrediente = await IngredienteScheme.findOneAndRemove({ sku: req.params.sku });
        if (!ingrediente) {
            return res.status(404).json({ error: "Ingrediente not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the ingrediente." });
    }
};


module.exports = {
    getAllIngredientes,
    getIngrediente,
    postIngrediente,
    putIngrediente,
    deleteIngrediente
};