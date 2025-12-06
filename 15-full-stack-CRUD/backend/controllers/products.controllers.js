import Product from "../models/products.model.js"

// create product
export const createProduct = (req, res) => {
    res.json({
        message: "Prodcut creaed in DB successfully"
    })
}

// create product
export const readAllProducts = (req, res) => {
    res.json({
        message: "All product read from DB"
    })
}

