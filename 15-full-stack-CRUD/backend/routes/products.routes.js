import express from "express"
const router = express.Router()

import { createProduct, readAllProducts } from "../controllers/products.controllers.js"

// create product "/products"  
router.route("/products").post(createProduct)

// read all products "/products"  
router.route("/products").get(readAllProducts)

export default router