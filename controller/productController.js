import Product from "../model/Product.js";

export const addProduct = async (req, res) => {
  try {
    const { name, price, available } = req.body;

    if (!name || !price) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }
    const userId = req.auth._id;
    const product = await Product.create({
      name,
      price,
      createdBy: userId,
      available,
    });

    return res.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Add Product Error:", error.message);
    return res.json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate(
      "createdBy",
      "-password"
      
    );
    if (!product) {
      return res.json({
        success: false,
        message: "Product Not found",
      });
    }

    return res.json({
      success: true,
      product,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "internal server error",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ available: true })
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });
    if (!products || products.length === 0) {
      return res.json({
        success: false,
        message: "No products found",
      });
    }

    return res.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Get Products Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const toogleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.json({
        success: false,
        message: "product not found",
      });
    }
    product.available = !product.available;

    await product.save();
    return res.json({
      success: true,
      message: "Stock update successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal server error",
    });
  }
};
