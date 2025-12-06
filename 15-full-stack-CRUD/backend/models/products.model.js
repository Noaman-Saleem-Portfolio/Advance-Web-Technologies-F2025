import mongoose from "mongoose"

const productSchame = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        // default: 0
    },
    description: {
        type: String,
        // default: "No description available"
    },
    imageUrl: {
        type: String
    },
    imagePublicId: String
}, { timestamps: true })


// model
const Product = mongoose.model("Product", productSchame)

export default Product