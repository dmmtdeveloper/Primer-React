//const express = require("express");
import  express  from "express";
//const productController = require("../controllers/Productcontroller");
import * as productController from "../controllers/Productcontroller.js"
const router = express.Router();

router.get("/api/products/get", productController.getProducts);
router.post("/api/products/create", productController.createProducts);
router.put("/api/products/update", productController.updateProduct);
router.delete("/api/products/delete", productController.deleteProduct);
router.get("/api/products/getOne", productController.getOneProduct)

//module.exports = router;
export{router};

