const express = require("express");
const router = express.Router();
const createStudent =require("../Controllers/StudentController") ;

router.post("/create",createStudent.newStudent);

module.exports = router;