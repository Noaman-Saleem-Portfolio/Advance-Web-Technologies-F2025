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
    desc: {
        type: String
    },
    imageUrl: {
        type: String
    }
}, { timestamps: true })


// model
const Product = mongoose.model("Product", productSchame)

export default Product