const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    brand:{
        type:String
    }
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel