const express = require("express");
const router = express.Router();
const PizzaController =require("../Controllers/PizzaController") ;

router.get("/",PizzaController.getAllPizzas);
router.get("/:sku",PizzaController.getPizza);
router.post("/",PizzaController.postPizza);
router.put("/:sku",PizzaController.putPizza);
router.delete("/:sku",PizzaController.deletePizza);

module.exports = router;