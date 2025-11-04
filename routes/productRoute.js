import express from "express";
import { addProduct, getAllProducts, getSingleProduct } from "../controller/productController.js";

const productRoute = express.Router();

productRoute.post('/add',addProduct);
productRoute.get('/all',getAllProducts)
productRoute.post('/:id',getSingleProduct)
export default productRoute