import express from "express";
import { addProduct, getAllProducts } from "../controller/productController.js";

const productRoute = express.Router();

productRoute.post('/add',addProduct);
productRoute.get('/all',getAllProducts)
export default productRoute