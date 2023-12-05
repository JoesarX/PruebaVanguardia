const PizzaScheme = require("../Models/PizzaSchema")

const getAllPizzas = async (req, res) => {
    try {
        const pizzas = await PizzaScheme.find();
        res.status(200).json(pizzas);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching pizzas." });
    }
};


const getPizza = async (req, res) => {
    try {
        const pizza = await PizzaScheme.findOne({ sku: req.params.sku });
        if (!pizza) {
            return res.status(404).json({ error: "Pizza not found" });
        }
        res.status(200).json(pizza);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the pizza." });
    }
};

const postPizza = async (req, res) => {
    const pizza = new PizzaScheme(
        {
            sku: req.body.sku,
            nombre: req.body.nombre,
            precio: req.body.precio,
            tamano: req.body.tamano,
            ingredientes: req.body.ingredientes,
        }
    );
    try {
        const result = await pizza.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while saving the pizza." });
    }
}

const putPizza = async (req, res) => {
    try {
        const pizza = await PizzaScheme.findOneAndUpdate(
            { sku: req.params.sku },
            {
                sku: req.body.sku,
                nombre: req.body.nombre,
                precio: req.body.precio,
                tamano: req.body.tamano,
                ingredientes: req.body.ingredientes,
            },
            { new: true }
        );
        if (!pizza) {
            return res.status(404).json({ error: "Pizza not found" });
        }
        res.status(200).json(pizza);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the pizza." });
    }
};

const deletePizza = async (req, res) => {
    try {
        const pizza = await PizzaScheme.findOneAndRemove({ sku: req.params.sku });
        if (!pizza) {
            return res.status(404).json({ error: "Pizza not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the pizza." });
    }
};


module.exports = {
    getAllPizzas,
    getPizza,
    postPizza,
    putPizza,
    deletePizza
};