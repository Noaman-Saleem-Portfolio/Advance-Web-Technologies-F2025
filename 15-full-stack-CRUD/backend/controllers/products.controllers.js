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
        let uploadedImagePublicId = null;

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
                uploadedImagePublicId = upload.public_id;   // to update and delete from cloudinary
            } catch (uploadErr) {
                console.error("Cloudinary Upload Error:", uploadErr);
                return res.status(500).json({
                    message: "Image upload failed",
                    error: uploadErr.message
                });
            }
        }

        const product = new Product({ ...req.body, imageUrl: uploadedImageUrl, imagePublicId: uploadedImagePublicId })
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
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5; // items per page
        const skip = (page - 1) * limit;

        const totalProducts = await Product.countDocuments();
        const products = await Product.find()
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 }); // optional: newest first

        res.status(200).json({
            message: "Products fetched",
            products,
            page,
            totalPages: Math.ceil(totalProducts / limit),
            totalProducts,
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

        console.log(req.body);

        const existingProduct = await Product.findById(id)

        // findById() returns null when no document matches
        // If no product found
        if (!existingProduct) {
            return res.status(404).json({
                message: "No product found with the provided ID"
            });
        }

        let updatedFields = req.body;

        // If a new image is provided from frontend
        // Only handle new image if user uploaded one
        if (req.body.newImage) {

            // 1️⃣ Delete old Cloudinary image
            if (existingProduct.imagePublicId) {
                await cloudinary.uploader.destroy(existingProduct.imagePublicId);
            }

            // 2️⃣ Upload new Cloudinary image
            const upload = await cloudinary.uploader.upload(req.body.newImage, {
                folder: "products"
            });

            updatedFields.imageUrl = upload.secure_url;
            updatedFields.imagePublicId = upload.public_id;
        }

        // Remove newImage before saving to DB
        delete updatedFields.newImage;

        const updatedProduct = await Product.findByIdAndUpdate(id, { $set: updatedFields }, { new: true })



        res.status(200).json({
            message: "Product updated Successfully",
            product: updatedProduct
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


        // ❌ 3. If Cloudinary fail to delete, you should still delete the database product
        // Right now if Cloudinary fails, your controller stops and the database product never gets deleted.
        // Better approach → wrap Cloudinary delete in try/catch:
        try {
            // ❌ 1. You must check if product.imagePublicId exists before deleting
            // If imagePublicId is missing or empty, Cloudinary returns an error:
            if (product.imagePublicId) {
                await cloudinary.uploader.destroy(product.imagePublicId);
            }
        } catch (error) {
            console.error("Cloudinary deletion error:", cloudErr);
            // continue — do not stop product deletion
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














