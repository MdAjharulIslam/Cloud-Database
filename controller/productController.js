import Product from "../model/Product.js";

export const addProduct = async (req, res) => {
  try {
    const { name, createdBy } = req.body;

    if (!name || !createdBy) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const product = await Product.create({
      name,
      createdBy,
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

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("createdBy", "name email")
      .sort({createdAt:-1})
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
