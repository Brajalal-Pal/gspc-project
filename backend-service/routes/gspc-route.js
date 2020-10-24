const express = require("express");
const { check, body } = require("express-validator");
const gspcController = require("../controllers/gspcController");
const router = express.Router();

//GET            
router.get("/gspc", gspcController.getGspcCSVToJSONData);

//POST 
router.post("/gspc", gspcController.postGspcJsonDataToCSV);

module.exports = router;
