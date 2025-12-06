import Product from "../models/products.model.js"

// create product
export const createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const { name, price } = req.body

        if (!name || !price) {
            return res.status(401).json({
                message: "Product Name and Price can not be empty"
            })
        }

        const product = new Product(req.body)
        await product.save()

        res.status(200).json({
            message: "Prodcut creaed in DB successfully",
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// create product
export const readAllProducts = (req, res) => {
    res.json({
        message: "All product read from DB"
    })
}

