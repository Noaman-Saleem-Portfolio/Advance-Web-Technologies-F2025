import Product from "../models/products.model.js"
import { v2 as cloudinary } from 'cloudinary';


// create product
export const createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const { name, price } = req.body
        let { imageUrl } = req.body

        if (!name || !price) {
            return res.status(400).json({
                message: "Product Name and Price can not be empty"
            })
        }

        let uploadedImageUrl = null;
        // Upload only if provided
        if (imageUrl) {
            try {
                const upload = await cloudinary.uploader.upload(imageUrl, {
                    folder: "products",
                    resource_type: "image",
                    max_file_size: 2_000_000, // 2MB
                });
                console.log(`uploadedResponse Cloudinary = ${upload}`);
                uploadedImageUrl = upload.secure_url;
            } catch (uploadErr) {
                console.error("Cloudinary Upload Error:", uploadErr);
                return res.status(500).json({
                    message: "Image upload failed",
                    error: uploadErr.message
                });
            }
        }

        const product = new Product({ ...req.body, imageUrl: uploadedImageUrl })
        await product.save()

        res.status(201).json({
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

// read all products
export const readAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        const length = products.length

        res.status(200).json({
            message: "All product read from DB",
            productQty: length,
            products,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server error",
        })
    }

}

// read Single Product
export const readSingleProduct = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params

        const product = await Product.findById(id)

        // findById() returns null when no document matches
        // If no product found
        if (!product) {
            return res.status(404).json({
                message: "No product found with the provided ID"
            });
        }

        res.status(200).json({
            message: "Single product fetched Successfully",
            product
        })

    } catch (error) {
        console.log(error);

        // If someone sends an invalid MongoDB ObjectId (e.g., /123), findById() will throw a CastError.
        // To handle this cleanly, you can detect it like this:
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid product ID format"
            });
        }

        res.status(500).json({
            message: "Internal Server error",
        })
    }
}

// update product
export const updateProduct = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params

        const product = await Product.findByIdAndUpdate(id, { $set: req.body }, { new: true })

        // findById() returns null when no document matches
        // If no product found
        if (!product) {
            return res.status(404).json({
                message: "No product found with the provided ID"
            });
        }

        res.status(200).json({
            message: "Product updated Successfully",
            product
        })

    } catch (error) {
        console.log(error);

        // If someone sends an invalid MongoDB ObjectId (e.g., /123), findById() will throw a CastError.
        // To handle this cleanly, you can detect it like this:
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid product ID format"
            });
        }

        res.status(500).json({
            message: "Internal Server error",
        })
    }
}

// delete a Product
export const deleteProduct = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params

        const product = await Product.findOne({ _id: id })

        // findById() returns null when no document matches
        // If no product found
        if (!product) {
            return res.status(404).json({
                message: "No product found with the provided ID"
            });
        }

        await Product.findByIdAndDelete(id)

        res.status(200).json({
            message: "Product Deleted Successfully",
        })

    } catch (error) {
        console.log(error);

        // If someone sends an invalid MongoDB ObjectId (e.g., /123), findById() will throw a CastError.
        // To handle this cleanly, you can detect it like this:
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid product ID format"
            });
        }

        res.status(500).json({
            message: "Internal Server error",
        })
    }
}














