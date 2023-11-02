const express = require("express");
const router = express.Router();
const MenuController =require("../Controllers/MenuController") ;

router.get("/",MenuController.getAllMenus);
router.get("/:sku",MenuController.getMenu);
router.post("/",MenuController.postMenu);
router.put("/:sku",MenuController.putMenu);
router.delete("/:sku",MenuController.deleteMenu);

module.exports = router;