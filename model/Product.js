import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"User",
        required:true
    },
    available:{
        type:Boolean,
        required:true,
        default:true
    }
},{timestamps:true})

const Product =  mongoose.model("Product", productSchema);

export default Product;