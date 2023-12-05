const express = require("express");
const router = express.Router();
const IngredienteController =require("../Controllers/IngredienteController") ;

router.get("/",IngredienteController.getAllIngredientes);
router.get("/:sku",IngredienteController.getIngrediente);
router.post("/",IngredienteController.postIngrediente);
router.put("/:sku",IngredienteController.putIngrediente);
router.delete("/:sku",IngredienteController.deleteIngrediente);

module.exports = router;