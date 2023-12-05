const MenuScheme = require("../Models/MenuSchema")

const getAllMenus = async (req, res) => {
    try {
        const menus = await MenuScheme.find();
        res.status(200).json(menus);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching menus." });
    }
};


const getMenu = async (req, res) => {
    try {
        const menu = await MenuScheme.findOne({ sku: req.params.sku });
        if (!menu) {
            return res.status(404).json({ error: "Menu not found" });
        }
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the menu." });
    }
};

const postMenu = async (req, res) => {
    const menu = new MenuScheme(
        {
            sku: req.body.sku,
            nombre: req.body.nombre,
            precio: req.body.precio,
            combo: req.body.combo,
        }
    );
    try {
        const result = await menu.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while saving the menu." });
    }
}

const putMenu = async (req, res) => {
    try {
        const menu = await MenuScheme.findOneAndUpdate(
            { sku: req.params.sku },
            {
                sku: req.body.sku,
                nombre: req.body.nombre,
                precio: req.body.precio,
                combo: req.body.combo,
            },
            { new: true }
        );
        if (!menu) {
            return res.status(404).json({ error: "Menu not found" });
        }
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the menu." });
    }
};

const deleteMenu = async (req, res) => {
    try {
        const menu = await MenuScheme.findOneAndRemove({ sku: req.params.sku });
        if (!menu) {
            return res.status(404).json({ error: "Menu not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the menu." });
    }
};


module.exports = {
    getAllMenus,
    getMenu,
    postMenu,
    putMenu,
    deleteMenu
};