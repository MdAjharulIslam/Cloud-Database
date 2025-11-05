import express from "express";
import { addProduct, getAllProducts, getSingleProduct, toogleProduct } from "../controller/productController.js";

const productRoute = express.Router();

productRoute.post('/add',addProduct);
productRoute.get('/all',getAllProducts)
productRoute.post('/:id',getSingleProduct)
productRoute.post('/toogle/:id',toogleProduct)
export default productRoute