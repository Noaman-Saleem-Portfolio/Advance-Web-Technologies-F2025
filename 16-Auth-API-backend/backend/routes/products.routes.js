import express from "express"
const router = express.Router()

import { createProduct, deleteProduct, readAllProducts, readSingleProduct, updateProduct } from "../controllers/products.controllers.js"

// create product "/products"  
router.route("/products").post(createProduct)

// read all products "/products"  
router.route("/products").get(readAllProducts)

// read single product "/product/:id"  
router.route("/product/:id").get(readSingleProduct)

// update a product "/product/:id"  
router.route("/product/:id").put(updateProduct)

// delete a product "/product/:id"  
router.route("/product/:id").delete(deleteProduct)

export default router