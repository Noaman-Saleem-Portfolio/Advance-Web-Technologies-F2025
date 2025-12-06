import mongoose from "mongoose"

const productSchame = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    desc:{
        type:String
    },
    price:{
        type:Number
    },
},{ timestamps: true } )


// model
const Product = mongoose.model("Product",productSchame)

export default Product